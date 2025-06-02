<?php

/*
 * This file is part of yippy/tag-with-themes.
 *
 * Copyright (c) 2024 Yippy
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Yippy\FlarumTagWithThemes;

use Flarum\Extend;
use Flarum\Frontend\Document;
use Flarum\Api\Resource;
use Flarum\Api\Schema;
use Flarum\Api\Context;

return [
    (new Extend\Frontend('admin'))
        ->content(function (Document $document) {
            $document->head[] = '
                <script src="/assets/extensions/yippy-tag-with-themes/jquery.min.js"></script>
                <script src="/assets/extensions/yippy-tag-with-themes/select2.min.js"></script>
                <link href="/assets/extensions/yippy-tag-with-themes/select2.min.css" rel="stylesheet">
            ';
        }),
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),
    (new Extend\ApiResource(Resource\DiscussionResource::class))
        ->fields(fn () => [
            Schema\Boolean::make('isTagWithThemesEnabled')
                ->get(function (object $forum, Context $context) {
                    return $context->getActor()->hasPermissionLike('yippy-tag-with-themes.display-themes');
                }),
        ]),
    (new Extend\Settings())
        ->serializeToForum('yippy-tag-with-themes.designDefault', 'yippy-tag-with-themes.design-default', function (?string $value): string {
            return $value ? $value : 'StickyNote';
        })
        ->serializeToForum('yippy-tag-with-themes.designByTags', 'yippy-tag-with-themes.design-by-tags', function (?string $value): array {
            return $value ? json_decode($value, true) : [];
        }),

    new Extend\Locales(__DIR__.'/locale'),
];