import { extend, override } from 'flarum/extend';

app.initializers.add(
  'yippy-tag-with-themes',
  (app) => {
    app.extensionData
      .registerSetting({
          setting: 'yippy-tag-with-themes.design-default',
          type: 'select',
          options: {
              'StickyNote': app.translator.trans('yippy-tag-with-themes.admin.options.design_options.sticky_note'),
              'StickyNoteTag': app.translator.trans('yippy-tag-with-themes.admin.options.design_options.sticky_note_tag'),
              'StickyNoteFilingTag': app.translator.trans('yippy-tag-with-themes.admin.options.design_options.sticky_note_filing_tag'),
              'StickyNoteBanner': app.translator.trans('yippy-tag-with-themes.admin.options.design_options.sticky_note_banner'),
              'StickyNoteMinimal': app.translator.trans('yippy-tag-with-themes.admin.options.design_options.sticky_note_minimal'),
              'StickyNoteMinimalTag': app.translator.trans('yippy-tag-with-themes.admin.options.design_options.sticky_note_minimal_tag'),
              'StickyNoteMinimalFilingTag': app.translator.trans('yippy-tag-with-themes.admin.options.design_options.sticky_note_minimal_filing_tag'),
              'StickyNoteMinimalBanner': app.translator.trans('yippy-tag-with-themes.admin.options.design_options.sticky_note_minimal_banner'),
          },
          default: 'StickyNote',
          label: app.translator.trans('yippy-tag-with-themes.admin.labels.design_default'),
          help: app.translator.trans('yippy-tag-with-themes.admin.helps.design_default'),
      });
  },
  -999999
);
