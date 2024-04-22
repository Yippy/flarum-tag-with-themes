import { extend, override } from 'flarum/extend';

app.initializers.add('yippy-tag-with-themes', (app) => {
    app.extensionData
    .for('yippy-tag-with-themes')
      .registerSetting({
          setting: 'yippy-tag-with-themes.design-default',
          type: 'select',
          options: {
              'StickyNote': app.translator.trans('yippy-tag-with-themes.admin.options.design_options.sticky_note'),
              'StickyNoteTag': app.translator.trans('yippy-tag-with-themes.admin.options.design_options.sticky_note_tag'),
              'StickyNoteTab': app.translator.trans('yippy-tag-with-themes.admin.options.design_options.sticky_note_tab'),
              'StickyNoteBanner': app.translator.trans('yippy-tag-with-themes.admin.options.design_options.sticky_note_banner'),
              'StickyNoteOutline': app.translator.trans('yippy-tag-with-themes.admin.options.design_options.sticky_note_outline'),
              'StickyNoteOutlineTag': app.translator.trans('yippy-tag-with-themes.admin.options.design_options.sticky_note_outline_tag'),
              'StickyNoteOutlineTab': app.translator.trans('yippy-tag-with-themes.admin.options.design_options.sticky_note_outline_tab'),
              'StickyNoteOutlineBanner': app.translator.trans('yippy-tag-with-themes.admin.options.design_options.sticky_note_outline_banner'),
              'Basic': app.translator.trans('yippy-tag-with-themes.admin.options.design_options.basic'),
              'BasicTag': app.translator.trans('yippy-tag-with-themes.admin.options.design_options.basic_tag'),
              'BasicTab': app.translator.trans('yippy-tag-with-themes.admin.options.design_options.basic_tab'),
              'BasicBanner': app.translator.trans('yippy-tag-with-themes.admin.options.design_options.basic_banner'),
              'BasicOutline': app.translator.trans('yippy-tag-with-themes.admin.options.design_options.basic_outline'),
              'BasicOutlineTag': app.translator.trans('yippy-tag-with-themes.admin.options.design_options.basic_outline_tag'),
              'BasicOutlineTab': app.translator.trans('yippy-tag-with-themes.admin.options.design_options.basic_outline_tab'),
              'BasicOutlineBanner': app.translator.trans('yippy-tag-with-themes.admin.options.design_options.basic_outline_banner'),
              'Flat': app.translator.trans('yippy-tag-with-themes.admin.options.design_options.flat'),
              'FlatTag': app.translator.trans('yippy-tag-with-themes.admin.options.design_options.flat_tag'),
              'FlatTab': app.translator.trans('yippy-tag-with-themes.admin.options.design_options.flat_tab'),
              'FlatBanner': app.translator.trans('yippy-tag-with-themes.admin.options.design_options.flat_banner'),
              'FlatBorder': app.translator.trans('yippy-tag-with-themes.admin.options.design_options.flat_border'),
              'FlatBorderTag': app.translator.trans('yippy-tag-with-themes.admin.options.design_options.flat_border_tag'),
              'FlatBorderTab': app.translator.trans('yippy-tag-with-themes.admin.options.design_options.flat_border_tab'),
              'FlatBorderBanner': app.translator.trans('yippy-tag-with-themes.admin.options.design_options.flat_border_banner'),
          },
          default: 'StickyNote',
          label: app.translator.trans('yippy-tag-with-themes.admin.labels.design_default'),
          help: app.translator.trans('yippy-tag-with-themes.admin.helps.design_default'),
      });
  },
  -999999
);
