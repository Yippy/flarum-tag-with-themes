# Tag with Themes

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Yippy/flarum-tag-with-themes/blob/main/LICENSE) [![Latest Stable Version](https://img.shields.io/packagist/v/yippy/flarum-tag-with-themes.svg)](https://packagist.org/packages/yippy/flarum-tag-with-themes) [![Total Downloads](https://img.shields.io/packagist/dt/yippy/flarum-tag-with-themes.svg)](https://packagist.org/packages/yippy/flarum-tag-with-themes) [![Donate](https://img.shields.io/badge/-Buy%20Me%20a%20Coffee-ff5f5f?logo=ko-fi&logoColor=white)](https://www.buymeacoffee.com/yippy)

This extension allows Administrators to display different themes for discussions with tags.

## Installation

This extension requires PHP 7.4 or higher.

    `composer require yippy/flarum-tag-with-themes`

You must run this command for this extension to work, this is because the assets command will include select2 for the dropdown menu to work.

    `php flarum assets:publish`

If you are unable to run that command, and the dropdown menu is still not working. You can copy the [asset manually](https://github.com/Yippy/flarum-tag-with-themes/tree/main/assets) and move it to the [FLARUM_DATA_DIRECTORY]\assets\extensions\yippy-tag-with-themes\ folder.

## Flarum Tag with Themes

Currently the default Flarum design theme does not cater for different theme style with Tags that are assigned to the discussion. This was created to allow Administrators to change the entire themes with Tag Theming. Currently there is only 24 styles of themes, and in the future there can be additional themes. 

### Themes

Setup example within the Tags Settings Extension
![Tag Setup](/assets/images/tag_setup.png)

Sticky Note 
![Sticky Note Theme](/assets/images/sticky_note_theme.png)
![Sticky Note (Primary Tag) Theme](/assets/images/sticky_note_theme_-_primary_tag.png)
![Sticky Note (Primary Tab) Theme](/assets/images/sticky_note_theme_-_primary_tab.png)
![Sticky Note (Primary Banner) Theme](/assets/images/sticky_note_theme_-_primary_banner.png)

Sticky Note Outline
![Sticky Note Outline Theme](/assets/images/sticky_note_outline_theme.png)
![Sticky Note Outline (Primary Tag) Theme](/assets/images/sticky_note_outline_theme_-_primary_tag.png)
![Sticky Note Outline (Primary Tab) Theme](/assets/images/sticky_note_outline_theme_-_primary_tab.png)
![Sticky Note Outline (Primary Banner) Theme](/assets/images/sticky_note_outline_theme_-_primary_banner.png)

### Customisation
Switch between Design themes depending on selected Primary Tag, this help make dicussion with a specific tag to stand out more.
![Customising design by tags](/assets/images/customising_design_by_tags_example.png)

Override Font
![Customising design by tags fot](/assets/images/customising_design_by_tags_font_example.png)

## Support

This extension is under **minimal maintenance**.

## Links

- [GitHub](https://github.com/Yippy/flarum-tag-with-themes)
- [Packagist](https://packagist.org/packages/yippy/flarum-tag-with-themes)
- [Discuss](https://discuss.flarum.org/d/34412-tag-with-themes)
