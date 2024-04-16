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

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),

    (new Extend\Settings())
        ->serializeToForum('yippy-tag-with-themes.designDefault', 'yippy-tag-with-themes.design-default', function (?string $value): string {
            return $value ? $value : 'StickyNote';
        })
        ->serializeToForum('yippy-tag-with-themes.designByTags', 'yippy-tag-with-themes.design-by-tags', function (?string $value): array {
            return $value ? json_decode($value, true) : [];
        }),

    new Extend\Locales(__DIR__.'/locale'),
];