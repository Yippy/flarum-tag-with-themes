<?php

namespace Yippy\FlarumTagWithThemes\Listener;

use Flarum\Api\Serializer\DiscussionSerializer;
use Flarum\Discussion\Discussion;
use Flarum\Settings\SettingsRepositoryInterface;

class AddDiscussionAttributes
{
    public function __construct(protected SettingsRepositoryInterface $settings) {}

    public function __invoke(DiscussionSerializer $serializer, Discussion $discussion, array $attributes): array
    {
        $actor = $serializer->getActor();
        // Do actor checks if actor has permission, the attribute is added to DiscussionSerializer because UserSerializer would be null if anonymous is viewing.
        $isEnabled = $actor->hasPermission('yippy-tag-with-themes.display-themes');
        $attributes['isTagWithThemesEnabled'] = $isEnabled;
        return $attributes;
    }
}
