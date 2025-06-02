# Tag with Themes

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Yippy/flarum-tag-with-themes/blob/main/LICENSE) [![Latest Stable Version](https://img.shields.io/packagist/v/yippy/flarum-tag-with-themes.svg)](https://packagist.org/packages/yippy/flarum-tag-with-themes) [![Total Downloads](https://img.shields.io/packagist/dt/yippy/flarum-tag-with-themes.svg)](https://packagist.org/packages/yippy/flarum-tag-with-themes) [![Donate](https://img.shields.io/badge/-Buy%20Me%20a%20Coffee-ff5f5f?logo=ko-fi&logoColor=white)](https://www.buymeacoffee.com/yippy)

This extension allows Administrators to display different themes for discussions with tags.

## Installation

This extension requires PHP 7.4 or higher.

    `composer require yippy/flarum-tag-with-themes`

You must run this command for this extension to work, this is because the assets command will include select2 for the dropdown menu to work.

    `php flarum assets:publish`

![Run Flarum Assets Command](https://github.com/Yippy/flarum-tag-with-themes/raw/main/assets/images/run_flarum_assets_command.png)

If you are unable to run that command, and the dropdown menu is still not working. You can copy the [asset manually](https://github.com/Yippy/flarum-tag-with-themes/tree/main/assets) and move it to the [FLARUM_DATA_DIRECTORY]\assets\extensions\yippy-tag-with-themes\ folder.

## Flarum Tag with Themes

 This was created to allow Administrators to change the entire dicussion with Tag Theming, this can be done for assigned User Permission Groups or individual Tags.
 
 You are able to assign the default as None, and just add customisation to only show Tag with Themes for specific Tags.
 
 Currently there is 24 styles of themes, and in the future there can be additional themes. 

### Themes

Setup example within the Tags Settings Extension
![Tag Setup](https://github.com/Yippy/flarum-tag-with-themes/raw/main/assets/images/tag_setup.png)

<details markdown="1"><summary>Sticky Note</summary>
![Sticky Note Theme](https://github.com/Yippy/flarum-tag-with-themes/raw/main/assets/images/sticky_note_theme.png)
![Sticky Note (Primary Tag) Theme](https://github.com/Yippy/flarum-tag-with-themes/raw/main/assets/images/sticky_note_theme_-_primary_tag.png)
![Sticky Note (Primary Tab) Theme](https://github.com/Yippy/flarum-tag-with-themes/raw/main/assets/images/sticky_note_theme_-_primary_tab.png)
![Sticky Note (Primary Banner) Theme](https://github.com/Yippy/flarum-tag-with-themes/raw/main/assets/images/sticky_note_theme_-_primary_banner.png)
</details>

<details markdown="2"><summary>Sticky Note Outline</summary>
![Sticky Note Outline Theme](https://github.com/Yippy/flarum-tag-with-themes/raw/main/assets/images/sticky_note_outline_theme.png)
![Sticky Note Outline (Primary Tag) Theme](https://github.com/Yippy/flarum-tag-with-themes/raw/main/assets/images/sticky_note_outline_theme_-_primary_tag.png)
![Sticky Note Outline (Primary Tab) Theme](https://github.com/Yippy/flarum-tag-with-themes/raw/main/assets/images/sticky_note_outline_theme_-_primary_tab.png)
![Sticky Note Outline (Primary Banner) Theme](https://github.com/Yippy/flarum-tag-with-themes/raw/main/assets/images/sticky_note_outline_theme_-_primary_banner.png)
</details>

<details markdown="3"><summary>Flat Theme</summary>
![Sticky Note Outline Theme](https://github.com/Yippy/flarum-tag-with-themes/raw/main/assets/images/flat_theme.png)
![Sticky Note Outline (Primary Tag) Theme](https://github.com/Yippy/flarum-tag-with-themes/raw/main/assets/images/flat_theme_-_primary_tag.png)
![Sticky Note Outline (Primary Tab) Theme](https://github.com/Yippy/flarum-tag-with-themes/raw/main/assets/images/flat_theme_-_primary_tab.png)
![Sticky Note Outline (Primary Banner) Theme](https://github.com/Yippy/flarum-tag-with-themes/raw/main/assets/images/flat_theme_-_primary_banner.png)
</details>

<details markdown="4"><summary>Flat Border Theme</summary>
![Sticky Note Outline Theme](https://github.com/Yippy/flarum-tag-with-themes/raw/main/assets/images/flat_border_theme.png)
![Sticky Note Outline (Primary Tag) Theme](https://github.com/Yippy/flarum-tag-with-themes/raw/main/assets/images/flat_border_theme_-_primary_tag.png)
![Sticky Note Outline (Primary Tab) Theme](https://github.com/Yippy/flarum-tag-with-themes/raw/main/assets/images/flat_border_theme_-_primary_tab.png)
![Sticky Note Outline (Primary Banner) Theme](https://github.com/Yippy/flarum-tag-with-themes/raw/main/assets/images/flat_border_theme_-_primary_banner.png)
</details>

<details markdown="5"><summary>Basic Theme</summary>
![Sticky Note Outline Theme](https://github.com/Yippy/flarum-tag-with-themes/raw/main/assets/images/basic_theme.png)
![Sticky Note Outline (Primary Tag) Theme](https://github.com/Yippy/flarum-tag-with-themes/raw/main/assets/images/basic_theme_-_primary_tag.png)
![Sticky Note Outline (Primary Tab) Theme](https://github.com/Yippy/flarum-tag-with-themes/raw/main/assets/images/basic_theme_-_primary_tab.png)
![Sticky Note Outline (Primary Banner) Theme](https://github.com/Yippy/flarum-tag-with-themes/raw/main/assets/images/basic_theme_-_primary_banner.png)
</details>

<details markdown="6"><summary>Basic Outline Theme</summary>
![Sticky Note Outline Theme](https://github.com/Yippy/flarum-tag-with-themes/raw/main/assets/images/basic_outline_theme.png)
![Sticky Note Outline (Primary Tag) Theme](https://github.com/Yippy/flarum-tag-with-themes/raw/main/assets/images/basic_outline_theme_-_primary_tag.png)
![Sticky Note Outline (Primary Tab) Theme](https://github.com/Yippy/flarum-tag-with-themes/raw/main/assets/images/basic_outline_theme_-_primary_tab.png)
![Sticky Note Outline (Primary Banner) Theme](https://github.com/Yippy/flarum-tag-with-themes/raw/main/assets/images/basic_outline_theme_-_primary_banner.png)
</details>

### Customisation
Switch between Design themes depending on selected Primary Tag, this help make dicussion with a specific tag to stand out more.
![Customising design by tags](https://github.com/Yippy/flarum-tag-with-themes/raw/main/assets/images/customising_design_by_tags_example.png)

Override Font, useful for text legibility due to Tag Colours
![Customising design by tags fot](https://github.com/Yippy/flarum-tag-with-themes/raw/main/assets/images/customising_design_by_tags_font_example.png)

Assign Permission
![Customising design by tags fot](https://github.com/Yippy/flarum-tag-with-themes/raw/main/assets/images/assign_permission.png)

## Support

This extension is under **minimal maintenance**.

## Links

- [GitHub](https://github.com/Yippy/flarum-tag-with-themes)
- [Packagist](https://packagist.org/packages/yippy/flarum-tag-with-themes)
- [Discuss](https://discuss.flarum.org/d/34412-tag-with-themes)
