<?php

namespace App\Http\Controllers;

use App\Http\Middleware\HandleInertiaRequests;
use Inertia\Inertia;
use App\Models\Bookmark;
use App\Services\BookmarkService;
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
        BookmarkService $bookmarkService
    ) {
        $postData = $this->validate($request, [
            'link' => ['required'],
        ]);
        $data = $bookmarkService->getBookmarkData($postData['link']);

        $bookmark = Bookmark::create([
            'title' => $data['title'],
            'description' => $data['description'],
            'type' => $data['type'],
            'url' => $postData['link'],
            'img_url' => $data['image'],
            'user_id' => $request->user()->id,
        ]);
        return redirect()->route('bookmark.view', [
            'bookmark' => $bookmark->id,
        ]);
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

    public function makeActive(Request $request)
    {
        $postData = $this->validate($request, [
            'id' => ['required', 'exists:bookmarks,id'],
        ]);

        $bookmark = Bookmark::find($postData['id']);

        \logger($bookmark);

        if (Auth::user()->id != $bookmark->user_id) {
            abort(401, 'You art not allowed to make this bookmark active');
        }
        $bookmark->is_active = 1;
        $bookmark->save();
        return redirect()->route('bookmark.index');
    }

    public function redirect(Bookmark $bookmark)
    {
        DB::table($bookmark->getTable())
            ->where('id', $bookmark->id)
            ->increment('views');

        return redirect($bookmark->url);
    }
}
