<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\ModelCleanup\CleanupConfig;
use Spatie\ModelCleanup\GetsCleanedUp;

class Bookmark extends Model implements GetsCleanedUp
{
    use HasFactory;

    protected $guarded = [];

    public function tags()
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }

    public function cleanUp(CleanupConfig $config): void
    {
        $config->olderThanDays(1)->scope(function ($query) {
            $query->where('is_active', 0);
        });
    }
}
