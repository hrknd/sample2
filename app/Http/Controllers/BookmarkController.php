<?php

namespace App\Http\Controllers;

use App\Http\Middleware\HandleInertiaRequests;
use Inertia\Inertia;
use App\Models\Bookmark;
use App\Services\BookmarkService;
use App\Services\YuruhuwaService;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redis;

class BookmarkController extends Controller
{
    public function index()
    {
        $bookmarks = Bookmark::query()
            ->where('user_id', Auth::user()->id)
            ->where('is_active', 1)
            ->orderByDesc('updated_at')
            ->get();
        \logger(Auth::user()->id);
        return Inertia::render('Bookmark/List/index', [
            'bookmarks' => $bookmarks,
        ]);
    }

    public function add()
    {
        return Inertia::render('Bookmark/Add/index');
    }

    public function getPreviewData(
        Request $request,
        YuruhuwaService $yuruhuwaService
    ) {
        $postData = $this->validate($request, [
            'link' => ['required'],
        ]);
        $data = $yuruhuwaService->getYuruhuwa($postData['link']);
        var_dump($data);
        return $data;
    }

    public function view(Bookmark $bookmark)
    {
        \logger(Auth::user()->id);
        \logger($bookmark->user_id);
        if (Auth::user()->id != $bookmark->user_id) {
            abort(401, 'You art not allowed to view this bookmark');
        }
        $bookmark->load(['tags']);

        return Inertia::render('Bookmark/View/index', [
            'bookmark' => $bookmark,
        ]);
    }

    public function makeActive(
        Request $request,
        BookmarkService $bookmarkService
    ) {
        $postData = $this->validate($request, [
            'tags' => ['required', 'array'],
            'id' => ['required', 'exists:bookmarks,id'],
        ]);

        $bookmark = Bookmark::find($postData['id']);

        \logger($bookmark);

        if (Auth::user()->id != $bookmark->user_id) {
            abort(401, 'You art not allowed to make this bookmark active');
        }
        $bookmark->is_active = 1;
        $bookmark->save();

        $ids = $bookmarkService->handleBookmarkTags($postData['tags']);
        $bookmark->tags()->sync($ids);

        return redirect()->route('bookmark.index');
    }

    public function hendleUpdate(
        Request $request,
        BookmarkService $bookmarkService
    ) {
        $postData = $this->validate($request, [
            'tags' => ['required', 'array'],
            'id' => ['required', 'exists:bookmarks,id'],
        ]);

        $bookmark = Bookmark::find($postData['id']);

        if (Auth::user()->id != $bookmark->user_id) {
            abort(401, 'You art not allowed to make this bookmark active');
        }

        $ids = $bookmarkService->handleBookmarkTags($postData['tags']);
        $bookmark->tags()->sync($ids);

        return redirect()->route('bookmark.view', [
            'bookmark' => $bookmark->id,
        ]);
    }

    public function redirect(Bookmark $bookmark)
    {
        DB::table($bookmark->getTable())
            ->where('id', $bookmark->id)
            ->increment('views');

        return redirect($bookmark->url);
    }
}
