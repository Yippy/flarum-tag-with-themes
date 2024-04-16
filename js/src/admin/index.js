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
          },
          default: 'StickyNote',
          label: app.translator.trans('yippy-tag-with-themes.admin.labels.design_default'),
          help: app.translator.trans('yippy-tag-with-themes.admin.helps.design_default'),
      });
  },
  -999999
);
