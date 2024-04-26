import app from 'flarum/app';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';
import Button from 'flarum/common/components/Button';
import textContrastClass from 'flarum/common/helpers/textContrastClass';

interface TagDesign {
    themeName: string,
    tags: number[],
    primaryBackgroundColor: string,
    primaryFontClass: string,
    childBackgroundColor: string,
    childFontClass: string,
    outlineBackgroundColor: string,
    secondaryFontClass: string,
    unreadColor: string,
    isEnabled: boolean
}
const settingsPrefix = 'yippy-tag-with-themes';
const translationPrefix = 'yippy-tag-with-themes.admin.';
const tagDesignSettingKey = settingsPrefix+'.design-by-tags';

app.initializers.add(settingsPrefix, (app) => {
    const fontClassChoiceAvailable = [
        {
            id: 'Automatic',
            text: 'Automatic',
            class: null,
            color: '#e4e9f1',
        },
        {
            id: 'White',
            text: 'White Color',
            class: 'text-contrast--light',
            color: '#3d4c4c',
        },
        {
            id: 'WhiteWithBorder',
            text: 'White Color with Black Border',
            class: 'outlinetextblackborder',
            color: '#3d4c4c',
        },
        {
            id: 'Black',
            text: 'Black Color',
            class: 'text-contrast--dark',
            color: '#99bfbe',
        },
        {
            id: 'BlackWithBorder',
            text: 'Black Color with White Border',
            class: 'outlinetextwhiteborder',
            color: '#99bfbe',
        },
    ];
    const designThemeAvailable = [
        {
            id: 'StickyNote',
            text: app.translator.trans(translationPrefix+'options.design_options.sticky_note'),
        },{
            id: 'StickyNoteTag',
            text: app.translator.trans(translationPrefix+'options.design_options.sticky_note_tag'),
        },{
            id: 'StickyNoteTab',
            text: app.translator.trans(translationPrefix+'options.design_options.sticky_note_tab'),
        },{
            id: 'StickyNoteBanner',
            text: app.translator.trans(translationPrefix+'options.design_options.sticky_note_banner'),
        },{
            id: 'StickyNoteOutline',
            text: app.translator.trans(translationPrefix+'options.design_options.sticky_note_outline'),
        },{
            id: 'StickyNoteOutlineTag',
            text: app.translator.trans(translationPrefix+'options.design_options.sticky_note_outline_tag'),
        },{
            id: 'StickyNoteOutlineTab',
            text: app.translator.trans(translationPrefix+'options.design_options.sticky_note_outline_tab'),
        },{
            id: 'StickyNoteOutlineBanner',
            text: app.translator.trans(translationPrefix+'options.design_options.sticky_note_outline_banner'),
        },{
            id: 'Basic',
            text: app.translator.trans(translationPrefix+'options.design_options.basic'),
        },{
            id: 'BasicTag',
            text: app.translator.trans(translationPrefix+'options.design_options.basic_tag'),
        },{
            id: 'BasicTab',
            text: app.translator.trans(translationPrefix+'options.design_options.basic_tab'),
        },{
            id: 'BasicBanner',
            text: app.translator.trans(translationPrefix+'options.design_options.basic_banner'),
        },{
            id: 'BasicOutline',
            text: app.translator.trans(translationPrefix+'options.design_options.basic_outline'),
        },{
            id: 'BasicOutlineTag',
            text: app.translator.trans(translationPrefix+'options.design_options.basic_outline_tag'),
        },{
            id: 'BasicOutlineTab',
            text: app.translator.trans(translationPrefix+'options.design_options.basic_outline_tab'),
        },{
            id: 'BasicOutlineBanner',
            text: app.translator.trans(translationPrefix+'options.design_options.basic_outline_banner'),
        },{
            id: 'Flat',
            text: app.translator.trans(translationPrefix+'options.design_options.flat'),
        },{
            id: 'FlatTag',
            text: app.translator.trans(translationPrefix+'options.design_options.flat_tag'),
        },{
            id: 'FlatTab',
            text: app.translator.trans(translationPrefix+'options.design_options.flat_tab'),
        },{
            id: 'FlatBanner',
            text: app.translator.trans(translationPrefix+'options.design_options.flat_banner'),
        },{
            id: 'FlatBorder',
            text: app.translator.trans(translationPrefix+'options.design_options.flat_border'),
        },{
            id: 'FlatBorderTag',
            text: app.translator.trans(translationPrefix+'options.design_options.flat_border_tag'),
        },{
            id: 'FlatBorderTab',
            text: app.translator.trans(translationPrefix+'options.design_options.flat_border_tab'),
        },{
            id: 'FlatBorderBanner',
            text: app.translator.trans(translationPrefix+'options.design_options.flat_border_banner'),
        }
    ];
    function formatState (state) {
        if (!state.id) { return state.text; }
        var $state = $(
         '<span class="'+ (state.class ? state.class : textContrastClass(state.color))+'" style="background: '+state.color+'; padding-top: 2px; padding-right: 5px; padding-bottom: 2px; padding-left: 5px;"><i class="'+ state.icon +'"></i><span> '+ state.text +'</span></span>'
        );
        return $state;
    }
    app.extensionData
    .for(settingsPrefix)
      .registerSetting({
          setting: settingsPrefix+'.design-default',
          type: 'select',
          options:  designThemeAvailable.reduce((designs, design) => { designs[design.id] = design.text; return designs;}, {}),
          default: 'StickyNote',
          label: app.translator.trans(translationPrefix+'labels.design_default'),
          help: app.translator.trans(translationPrefix+'helps.design_default'),
      })
      .registerSetting(
        function (this: TagDesign) {
          let tagDesigns: TagDesign[];
          try {
            tagDesigns = JSON.parse(this.setting(tagDesignSettingKey)());
          } catch (e) {
            // do nothing, we'll reset to something usable
          }
  
          // @ts-ignore variable used before assignment, it's fine
          if (!Array.isArray(tagDesigns)) {
            tagDesigns = [];
          }
          let tags = app.store.all('tags');
          let tagsAvailable = [];
          tags.forEach((item, index) => {
            let tag = item.data;
            if(tag.attributes.position != null) {
                tagsAvailable.push({id: tag.id, text: tag.attributes.name, color: tag.attributes.color, icon: tag.attributes.icon});
            }
          });
          return m('.Form-group', [
            m('label', app.translator.trans(translationPrefix + 'designs.title')),
            m('.helpText', app.translator.trans(translationPrefix + 'designs.description')),
            m('table', {style:'table-layout:fixed'}, [
              m('tbody', [
                tagDesigns.map((rule, index) => m('table', {
                  border: '1px solid black',
                }, [
                  m('thead', m('tr', [
                    m('th', app.translator.trans(translationPrefix + 'designs.banner', {index: index+1})),
                    m('th', Button.component({
                      className: 'Button Button--icon',
                      icon: 'fas fa-times',
                      onclick: () => {
                        tagDesigns.splice(index, 1);
                          this.setting(tagDesignSettingKey)(tagDesigns.length > 0 ? JSON.stringify(tagDesigns) : null);
                      },
                    })
                    )
                  ])),
                  m('tbody', [
                    m('table', [
                      m('thead', m('tr', [
                        m('th', { width: '40%' }),
                        m('th', { width: '60%' }),
                      ])),
                      m('tbody', [
                        m('tr', [
                          m('th', { colspan: 2 }, app.translator.trans(translationPrefix + 'designs.header.theme')),
                        ]),
                        m('tr', [
                          m('td', app.translator.trans(translationPrefix + 'designs.data.themeName')),
                          m('td',
                            m('select', {
                              oncreate: ({dom}) => $(dom).select2({ width: '100%', multiple: false, data: designThemeAvailable}).on("change", function() {
                                this.dispatchEvent(new CustomEvent('edit', {"detail": $(this).val()}));
                              }).on('select2:select', function(e){
                                var id = e.params.data.id;
                                var option = $(e.target).children('[value='+id+']');
                                option.detach();
                                $(e.target).append(option).change();
                              }).val(rule.themeName || []).trigger("change"),
                              onedit: (event: InputEvent) => {
                                rule.themeName = event.detail;
                                this.setting(tagDesignSettingKey)(JSON.stringify(tagDesigns));
                              }
                            })
                          )
                        ]),
                        m('tr', [
                          m('td', app.translator.trans(translationPrefix + 'designs.data.tags')),
                          m('td',
                            m('select', {
                              oncreate: ({dom}) => $(dom).select2({ width: '100%', multiple: true, data: tagsAvailable, templateResult: formatState, templateSelection: formatState}).on("change", function() {
                                this.dispatchEvent(new CustomEvent('edit', {"detail": $(this).val()}));
                              }).on('select2:select', function(e){
                                var id = e.params.data.id;
                                var option = $(e.target).children('[value='+id+']');
                                option.detach();
                                $(e.target).append(option).change();
                              }).val(rule.tags || []).trigger("change"),
                              onedit: (event: InputEvent) => {
                                rule.tags = event.detail;
                                this.setting(tagDesignSettingKey)(JSON.stringify(tagDesigns));
                              }
                            })
                          )
                        ]),
                        m('tr', [
                          m('td', { colspan: 2, class: 'helpText'}, app.translator.trans(translationPrefix + 'designs.data.tags_help')),
                        ]),
                        m('tr', [
                          m('th', { colspan: 2 }, app.translator.trans(translationPrefix + 'designs.header.color_theme')),
                        ]),
                        m('tr', [
                          m('td', app.translator.trans(translationPrefix + 'designs.data.primary_background_color')),
                          m('td', m('input.FormControl', {
                            type: 'color',
                            value: rule.primaryBackgroundColor || '',
                            placeholder: '',
                            onchange: (event: InputEvent) => {
                                rule.primaryBackgroundColor = (event.target as HTMLInputElement).value;
                                this.setting(tagDesignSettingKey)(JSON.stringify(tagDesigns));
                            },
                          })),
                        ]),
                        m('tr', [
                          m('td', app.translator.trans(translationPrefix + 'designs.data.primary_font_class')),
                          m('td',
                            m('select', {
                              oncreate: ({dom}) => $(dom).select2({ width: '100%', multiple: false, data: fontClassChoiceAvailable, templateResult: formatState, templateSelection: formatState}).on("change", function() {
                                this.dispatchEvent(new CustomEvent('edit', {"detail": $(this).val()}));
                              }).on('select2:select', function(e){
                                var id = e.params.data.id;
                                var option = $(e.target).children('[value='+id+']');
                                option.detach();
                                $(e.target).append(option).change();
                              }).val(rule.primaryFontClass).trigger("change"),
                              onedit: (event: InputEvent) => {
                                rule.primaryFontClass = event.detail;
                                this.setting(tagDesignSettingKey)(JSON.stringify(tagDesigns));
                              }
                            })
                          )
                        ]),
                        m('tr', [
                          m('td', app.translator.trans(translationPrefix + 'designs.data.child_background_color')),
                          m('td', m('input.FormControl', {
                            type: 'color',
                            value: rule.childBackgroundColor || '',
                            placeholder: '',
                            onchange: (event: InputEvent) => {
                                rule.childBackgroundColor = (event.target as HTMLInputElement).value;
                                this.setting(tagDesignSettingKey)(JSON.stringify(tagDesigns));
                            },
                          })),
                        ]),
                        m('tr', [
                          m('td', app.translator.trans(translationPrefix + 'designs.data.child_font_class')),
                          m('td',
                            m('select', {
                              oncreate: ({dom}) => $(dom).select2({ width: '100%', multiple: false, data: fontClassChoiceAvailable, templateResult: formatState, templateSelection: formatState}).on("change", function() {
                                this.dispatchEvent(new CustomEvent('edit', {"detail": $(this).val()}));
                              }).on('select2:select', function(e){
                                var id = e.params.data.id;
                                var option = $(e.target).children('[value='+id+']');
                                option.detach();
                                $(e.target).append(option).change();
                              }).val(rule.childFontClass).trigger("change"),
                              onedit: (event: InputEvent) => {
                                rule.childFontClass = event.detail;
                                this.setting(tagDesignSettingKey)(JSON.stringify(tagDesigns));
                              }
                            })
                          )
                        ]),
                        m('tr', [
                          m('td', app.translator.trans(translationPrefix + 'designs.data.outline_background_color')),
                          m('td', m('input.FormControl', {
                            type: 'color',
                            value: rule.outlineBackgroundColor || '',
                            placeholder: '',
                            onchange: (event: InputEvent) => {
                                rule.outlineBackgroundColor = (event.target as HTMLInputElement).value;
                                this.setting(tagDesignSettingKey)(JSON.stringify(tagDesigns));
                            },
                          })),
                        ]),
                        m('tr', [
                          m('td', app.translator.trans(translationPrefix + 'designs.data.unread_color')),
                          m('td', m('input.FormControl', {
                            type: 'color',
                            value: rule.unreadColor || '',
                            placeholder: '',
                            onchange: (event: InputEvent) => {
                                rule.unreadColor = (event.target as HTMLInputElement).value;
                                this.setting(tagDesignSettingKey)(JSON.stringify(tagDesigns));
                            },
                          })),
                        ]),
                        m('tr', [
                          m('td', app.translator.trans(translationPrefix + 'designs.data.secondary_font_class')),
                          m('td',
                            m('select', {
                              oncreate: ({dom}) => $(dom).select2({ width: '100%', multiple: false, data: fontClassChoiceAvailable, templateResult: formatState, templateSelection: formatState}).on("change", function() {
                                this.dispatchEvent(new CustomEvent('edit', {"detail": $(this).val()}));
                              }).on('select2:select', function(e){
                                var id = e.params.data.id;
                                var option = $(e.target).children('[value='+id+']');
                                option.detach();
                                $(e.target).append(option).change();
                              }).val(rule.secondaryFontClass).trigger("change"),
                              onedit: (event: InputEvent) => {
                                rule.secondaryFontClass = event.detail;
                                this.setting(tagDesignSettingKey)(JSON.stringify(tagDesigns));
                              }
                            })
                          )
                        ]),
                        m('tr', [
                          m('td', app.translator.trans(translationPrefix + 'designs.data.is_enabled')),
                          m('td', m('input', {
                            type: 'checkbox',
                            checked: rule.isEnabled,
                            onchange: (event: InputEvent) => {
                                rule.isEnabled = (event.target as HTMLInputElement).checked;
                                this.setting(tagDesignSettingKey)(JSON.stringify(tagDesigns));
                            },
                          })),
                        ]),
                      ])
                    ])
                  ])
                ])),
                m('tr', m('td', Button.component({
                  className: 'Button Button--block',
                  onclick: () => {
                    tagDesigns.push({
                      themeName: '',
                      tags: [],
                      primaryBackgroundColor: '#e8ecf3',
                      primaryFontClass: 'Automatic',
                      childBackgroundColor: '#e8ecf3',
                      childFontClass: 'Automatic',
                      outlineBackgroundColor: '#595a58',
                      unreadColor: '#2199fc',
                      secondaryFontClass: 'Automatic',
                      isEnabled: true
                    });
  
                    this.setting(tagDesignSettingKey)(JSON.stringify(tagDesigns));
                  },
                }, app.translator.trans(translationPrefix + 'designs.add'))))
              ]),
            ]),
          ]);
        }
    )
  },
  -999999
);
