import { extend, override } from 'flarum/common/extend';
import DiscussionListItem from 'flarum/forum/components/DiscussionListItem';
import { truncate } from 'flarum/utils/string';
import textContrastClass from 'flarum/common/helpers/textContrastClass';
import classList from 'flarum/common/utils/classList';
import Link from 'flarum/common/components/Link';
import highlight from 'flarum/common/helpers/highlight';
import listItems from 'flarum/common/helpers/listItems';

export default function () {
  const fontClasses = {
    'Automatic': null,
    'White': 'text-contrast--light',
    'WhiteWithBorder': 'outlinetextblackborder',
    'Black': 'text-contrast--dark',
    'BlackWithBorder': 'outlinetextwhiteborder',
  };

  const designOptions = {
    "StickyNote": {
      isPrimaryTagBackgroundColorRequired: false,
      isPrimaryTagAnButton: false,
      primaryBackgroundColor: '#e8ecf3',
      primaryFontClass: null,
      isChildTagBackgroundColorRequired: true,
      childBackgroundColor: '#e8ecf3',
      childFontClass: null,
      isOutlineTagBackgroundColorRequired: false,
      outlineBackgroundColor: '#595a58',
      unreadColor: '#2199fc',
      unreadCSS: 'folded',
      secondaryFontClass: null,
      opacityBackground: 1,
      opacityFooter: 1,
      opacityOutline: 1

    },
    "StickyNoteTag": {
      isPrimaryTagBackgroundColorRequired: true,
      isPrimaryTagAnButton: true,
      primaryBackgroundColor: '#e8ecf3',
      primaryFontClass: null,
      isChildTagBackgroundColorRequired: true,
      childBackgroundColor: '#e8ecf3',
      childFontClass: null,
      isOutlineTagBackgroundColorRequired: false,
      outlineBackgroundColor: '#595a58',
      unreadColor: '#2199fc',
      unreadCSS: 'folded',
      secondaryFontClass: null,
      opacityBackground: 1,
      opacityFooter: 1,
      opacityOutline: 1
    },
    "StickyNoteTab": {
      isPrimaryTagBackgroundColorRequired: true,
      isPrimaryTagAnButton: true,
      primaryBackgroundColor: '#e8ecf3',
      primaryFontClass: null,
      isChildTagBackgroundColorRequired: true,
      childBackgroundColor: '#e8ecf3',
      childFontClass: null,
      isOutlineTagBackgroundColorRequired: false,
      outlineBackgroundColor: '#595a58',
      unreadColor: '#2199fc',
      unreadCSS: 'folded',
      secondaryFontClass: null,
      opacityBackground: 1,
      opacityFooter: 1,
      opacityOutline: 1
    },
    "StickyNoteBanner": {
      isPrimaryTagBackgroundColorRequired: true,
      isPrimaryTagAnButton: false,
      primaryBackgroundColor: '#e8ecf3',
      primaryFontClass: null,
      isChildTagBackgroundColorRequired: true,
      childBackgroundColor: '#e8ecf3',
      childFontClass: null,
      isOutlineTagBackgroundColorRequired: false,
      outlineBackgroundColor: '#595a58',
      unreadColor: '#2199fc',
      unreadCSS: 'folded',
      secondaryFontClass: null,
      opacityBackground: 1,
      opacityFooter: 1,
      opacityOutline: 1
    },
    "StickyNoteOutline": {
      isPrimaryTagBackgroundColorRequired: false,
      isPrimaryTagAnButton: false,
      primaryBackgroundColor: 'transparent',
      primaryFontClass: null,
      isChildTagBackgroundColorRequired: false,
      childBackgroundColor: '#e8ecf3',
      childFontClass: null,
      isOutlineTagBackgroundColorRequired: true,
      outlineBackgroundColor: '#595a58',
      unreadColor: '#2199fc',
      unreadCSS: 'folded',
      secondaryFontClass: null,
      opacityBackground: 1,
      opacityFooter: 1,
      opacityOutline: 1
    },
    "StickyNoteOutlineTag": {
      isPrimaryTagBackgroundColorRequired: true,
      isPrimaryTagAnButton: true,
      primaryBackgroundColor: '#e8ecf3',
      primaryFontClass: null,
      isChildTagBackgroundColorRequired: false,
      childBackgroundColor: '#e8ecf3',
      childFontClass: null,
      isOutlineTagBackgroundColorRequired: true,
      outlineBackgroundColor: '#595a58',
      unreadColor: '#2199fc',
      unreadCSS: 'folded',
      secondaryFontClass: null,
      opacityBackground: 1,
      opacityFooter: 1,
      opacityOutline: 1
    },
    "StickyNoteOutlineTab": {
      isPrimaryTagBackgroundColorRequired: true,
      isPrimaryTagAnButton: true,
      primaryBackgroundColor: '#e8ecf3',
      primaryFontClass: null,
      isChildTagBackgroundColorRequired: false,
      childBackgroundColor: '#e8ecf3',
      childFontClass: null,
      isOutlineTagBackgroundColorRequired: true,
      outlineBackgroundColor: '#595a58',
      unreadColor: '#2199fc',
      unreadCSS: 'folded',
      secondaryFontClass: null,
      opacityBackground: 1,
      opacityFooter: 1,
      opacityOutline: 1
    },
    "StickyNoteOutlineBanner": {
      isPrimaryTagBackgroundColorRequired: true,
      isPrimaryTagAnButton: false,
      primaryBackgroundColor: '#e8ecf3',
      primaryFontClass: null,
      isChildTagBackgroundColorRequired: false,
      childBackgroundColor: '#e8ecf3',
      childFontClass: null,
      isOutlineTagBackgroundColorRequired: true,
      outlineBackgroundColor: '#595a58',
      unreadColor: '#2199fc',
      unreadCSS: 'folded',
      secondaryFontClass: null,
      opacityBackground: 1,
      opacityFooter: 1,
      opacityOutline: 1
    },
    "Basic": {
      isPrimaryTagBackgroundColorRequired: false,
      isPrimaryTagAnButton: false,
      primaryBackgroundColor: '#e8ecf3',
      primaryFontClass: null,
      isChildTagBackgroundColorRequired: true,
      childBackgroundColor: '#e8ecf3',
      childFontClass: null,
      isOutlineTagBackgroundColorRequired: false,
      outlineBackgroundColor: '#595a58',
      unreadColor: '#2199fc',
      unreadCSS: 'circle',
      secondaryFontClass: null,
      opacityBackground: 1,
      opacityFooter: 1,
      opacityOutline: 1
    },
    "BasicTag": {
      isPrimaryTagBackgroundColorRequired: true,
      isPrimaryTagAnButton: true,
      primaryBackgroundColor: '#e8ecf3',
      primaryFontClass: null,
      isChildTagBackgroundColorRequired: true,
      childBackgroundColor: '#e8ecf3',
      childFontClass: null,
      isOutlineTagBackgroundColorRequired: false,
      outlineBackgroundColor: '#595a58',
      unreadColor: '#2199fc',
      unreadCSS: 'circle',
      secondaryFontClass: null,
      opacityBackground: 1,
      opacityFooter: 1,
      opacityOutline: 1
    },
    "BasicTab": {
      isPrimaryTagBackgroundColorRequired: true,
      isPrimaryTagAnButton: true,
      primaryBackgroundColor: '#e8ecf3',
      primaryFontClass: null,
      isChildTagBackgroundColorRequired: true,
      childBackgroundColor: '#e8ecf3',
      childFontClass: null,
      isOutlineTagBackgroundColorRequired: false,
      outlineBackgroundColor: '#595a58',
      unreadColor: '#2199fc',
      unreadCSS: 'circle',
      secondaryFontClass: null,
      opacityBackground: 1,
      opacityFooter: 1,
      opacityOutline: 1
    },
    "BasicBanner": {
      isPrimaryTagBackgroundColorRequired: true,
      isPrimaryTagAnButton: false,
      primaryBackgroundColor: '#e8ecf3',
      primaryFontClass: null,
      isChildTagBackgroundColorRequired: true,
      childBackgroundColor: '#e8ecf3',
      childFontClass: null,
      isOutlineTagBackgroundColorRequired: false,
      outlineBackgroundColor: '#595a58',
      unreadColor: '#2199fc',
      unreadCSS: 'circle',
      secondaryFontClass: null,
      opacityBackground: 1,
      opacityFooter: 1,
      opacityOutline: 1
    },
    "BasicOutline": {
      isPrimaryTagBackgroundColorRequired: false,
      isPrimaryTagAnButton: false,
      primaryBackgroundColor: 'transparent',
      primaryFontClass: null,
      isChildTagBackgroundColorRequired: false,
      childBackgroundColor: '#e8ecf3',
      childFontClass: null,
      isOutlineTagBackgroundColorRequired: true,
      outlineBackgroundColor: '#595a58',
      unreadColor: '#2199fc',
      unreadCSS: 'circle',
      secondaryFontClass: null,
      opacityBackground: 1,
      opacityFooter: 1,
      opacityOutline: 1
    },
    "BasicOutlineTag": {
      isPrimaryTagBackgroundColorRequired: true,
      isPrimaryTagAnButton: true,
      primaryBackgroundColor: '#e8ecf3',
      primaryFontClass: null,
      isChildTagBackgroundColorRequired: false,
      childBackgroundColor: '#e8ecf3',
      childFontClass: null,
      isOutlineTagBackgroundColorRequired: true,
      outlineBackgroundColor: '#595a58',
      unreadColor: '#2199fc',
      unreadCSS: 'circle',
      secondaryFontClass: null,
      opacityBackground: 1,
      opacityFooter: 1,
      opacityOutline: 1
    },
    "BasicOutlineTab": {
      isPrimaryTagBackgroundColorRequired: true,
      isPrimaryTagAnButton: true,
      primaryBackgroundColor: '#e8ecf3',
      primaryFontClass: null,
      isChildTagBackgroundColorRequired: false,
      childBackgroundColor: '#e8ecf3',
      childFontClass: null,
      isOutlineTagBackgroundColorRequired: true,
      outlineBackgroundColor: '#595a58',
      unreadColor: '#2199fc',
      unreadCSS: 'circle',
      secondaryFontClass: null,
      opacityBackground: 1,
      opacityFooter: 1,
      opacityOutline: 1
    },
    "BasicOutlineBanner": {
      isPrimaryTagBackgroundColorRequired: true,
      isPrimaryTagAnButton: false,
      primaryBackgroundColor: '#e8ecf3',
      primaryFontClass: null,
      isChildTagBackgroundColorRequired: false,
      childBackgroundColor: '#e8ecf3',
      childFontClass: null,
      isOutlineTagBackgroundColorRequired: true,
      outlineBackgroundColor: '#595a58',
      unreadColor: '#2199fc',
      unreadCSS: 'circle',
      secondaryFontClass: null,
      opacityBackground: 1,
      opacityFooter: 1,
      opacityOutline: 1
    },
    "Flat": {
      isPrimaryTagBackgroundColorRequired: false,
      isPrimaryTagAnButton: false,
      primaryBackgroundColor: '#e8ecf3',
      primaryFontClass: null,
      isChildTagBackgroundColorRequired: true,
      childBackgroundColor: '#e8ecf3',
      childFontClass: null,
      isOutlineTagBackgroundColorRequired: false,
      outlineBackgroundColor: '#595a58',
      unreadColor: '#2199fc',
      unreadCSS: 'square',
      secondaryFontClass: null,
      opacityBackground: 1,
      opacityFooter: 1,
      opacityOutline: 1
    },
    "FlatTag": {
      isPrimaryTagBackgroundColorRequired: true,
      isPrimaryTagAnButton: true,
      primaryBackgroundColor: '#e8ecf3',
      primaryFontClass: null,
      isChildTagBackgroundColorRequired: true,
      childBackgroundColor: '#e8ecf3',
      childFontClass: null,
      isOutlineTagBackgroundColorRequired: false,
      outlineBackgroundColor: '#595a58',
      unreadColor: '#2199fc',
      unreadCSS: 'square',
      secondaryFontClass: null,
      opacityBackground: 1,
      opacityFooter: 1,
      opacityOutline: 1
    },
    "FlatTab": {
      isPrimaryTagBackgroundColorRequired: true,
      isPrimaryTagAnButton: true,
      primaryBackgroundColor: '#e8ecf3',
      primaryFontClass: null,
      isChildTagBackgroundColorRequired: true,
      childBackgroundColor: '#e8ecf3',
      childFontClass: null,
      isOutlineTagBackgroundColorRequired: false,
      outlineBackgroundColor: '#595a58',
      unreadColor: '#2199fc',
      unreadCSS: 'square',
      secondaryFontClass: null,
      opacityBackground: 1,
      opacityFooter: 1,
      opacityOutline: 1
    },
    "FlatBanner": {
      isPrimaryTagBackgroundColorRequired: true,
      isPrimaryTagAnButton: false,
      primaryBackgroundColor: '#e8ecf3',
      primaryFontClass: null,
      isChildTagBackgroundColorRequired: true,
      childBackgroundColor: '#e8ecf3',
      childFontClass: null,
      isOutlineTagBackgroundColorRequired: false,
      outlineBackgroundColor: '#595a58',
      unreadColor: '#2199fc',
      unreadCSS: 'square',
      secondaryFontClass: null,
      opacityBackground: 1,
      opacityFooter: 1,
      opacityOutline: 1
    },
    "FlatBorder": {
      isPrimaryTagBackgroundColorRequired: false,
      isPrimaryTagAnButton: false,
      primaryBackgroundColor: 'transparent',
      primaryFontClass: null,
      isChildTagBackgroundColorRequired: false,
      childBackgroundColor: '#e8ecf3',
      childFontClass: null,
      isOutlineTagBackgroundColorRequired: true,
      outlineBackgroundColor: '#595a58',
      unreadColor: '#2199fc',
      unreadCSS: 'square',
      secondaryFontClass: null,
      opacityBackground: 1,
      opacityFooter: 1,
      opacityOutline: 1
    },
    "FlatBorderTag": {
      isPrimaryTagBackgroundColorRequired: true,
      isPrimaryTagAnButton: true,
      primaryBackgroundColor: '#e8ecf3',
      primaryFontClass: null,
      isChildTagBackgroundColorRequired: false,
      childBackgroundColor: '#e8ecf3',
      childFontClass: null,
      isOutlineTagBackgroundColorRequired: true,
      outlineBackgroundColor: '#595a58',
      unreadColor: '#2199fc',
      unreadCSS: 'square',
      secondaryFontClass: null,
      opacityBackground: 1,
      opacityFooter: 1,
      opacityOutline: 1
    },
    "FlatBorderTab": {
      isPrimaryTagBackgroundColorRequired: true,
      isPrimaryTagAnButton: true,
      primaryBackgroundColor: '#e8ecf3',
      primaryFontClass: null,
      isChildTagBackgroundColorRequired: false,
      childBackgroundColor: '#e8ecf3',
      childFontClass: null,
      isOutlineTagBackgroundColorRequired: true,
      outlineBackgroundColor: '#595a58',
      unreadColor: '#2199fc',
      unreadCSS: 'square',
      secondaryFontClass: null,
      opacityBackground: 1,
      opacityFooter: 1,
      opacityOutline: 1
    },
    "FlatBorderBanner": {
      isPrimaryTagBackgroundColorRequired: true,
      isPrimaryTagAnButton: false,
      primaryBackgroundColor: '#e8ecf3',
      primaryFontClass: null,
      isChildTagBackgroundColorRequired: false,
      childBackgroundColor: '#e8ecf3',
      childFontClass: null,
      isOutlineTagBackgroundColorRequired: true,
      outlineBackgroundColor: '#595a58',
      unreadColor: '#2199fc',
      unreadCSS: 'square',
      secondaryFontClass: null,
      opacityBackground: 1,
      opacityFooter: 1,
      opacityOutline: 1
    }
  };

  let discussionDesign;
  let discussionDesignOption;
  let parentTagFound;
  let childTagFound;
  let secondaryTags;

  function initialiseThemeBuilder (discussionTags, app) {
    discussionDesign = discussionDesignOption = parentTagFound = childTagFound = null;
    secondaryTags = {
      tag: "span",
      attrs: {
        class: 'DiscussionListItem--secondary',
        style: {
        },
      },
      children: []
    };
    discussionDesign = app.forum.attribute('yippy-tag-with-themes.designDefault');
    const discussionDesignByTags = app.forum.attribute('yippy-tag-with-themes.designByTags');
    let mergeOptions = null;
    if (discussionTags && discussionTags.length > 0) {
      for (const tag of discussionTags) {
        if (tag.data.attributes.isChild) {
          childTagFound = tag;
        } else if (tag.data.attributes.position == null) {
        } else {
          parentTagFound = tag;
        }
      };
    }

    if (parentTagFound) {
      for (const customisedDesign of discussionDesignByTags) {
        if(customisedDesign.isEnabled && customisedDesign.tags.includes( parentTagFound.id() )){
          discussionDesign = customisedDesign.themeName;
          mergeOptions = {
            primaryBackgroundColor: customisedDesign.primaryBackgroundColor,
            primaryFontClass: fontClasses[customisedDesign.primaryFontClass],
            childBackgroundColor: customisedDesign.childBackgroundColor,
            childFontClass: fontClasses[customisedDesign.childFontClass],
            outlineBackgroundColor: customisedDesign.outlineBackgroundColor,
            unreadColor: customisedDesign.unreadColor,
            secondaryFontClass: fontClasses[customisedDesign.secondaryFontClass],
            opacityBackground: customisedDesign.opacityBackground,
            opacityFooter: customisedDesign.opacityFooter,
            opacityOutline: customisedDesign.opacityOutline,
          }
          break;
        }
      }
    }
    if (discussionDesign && discussionDesign != "None") {
      discussionDesignOption = designOptions[discussionDesign];
      if (mergeOptions) {
        discussionDesignOption = Object.assign({}, discussionDesignOption, mergeOptions);
      }
      if (discussionTags && discussionTags.length > 0) {
        for (const tag of discussionTags) {
          if (tag.data.attributes.position == null) {
            secondaryTags.children.push(
              <span class="TagLabel" style={'--tag-bg:' + tag.color()}>
                <span class={classList("TagLabel-text",  (discussionDesignOption.secondaryFontClass ? discussionDesignOption.secondaryFontClass: textContrastClass(tag.color())))}>
                  <i class={'TagLabel-icon ' + tag.data.attributes.icon }></i>
                  <span class="TagLabel-name">{tag.data.attributes.name}</span>
                </span>
              </span>
            );
          }
        };
      }
    }
  }

  extend(DiscussionListItem.prototype, 'view', function (vnode) {
    const discussion = this.attrs.discussion;
    if (discussionDesignOption) {
      const discussionListItemContent = vnode.children.find(
        (e) => e && e.tag === 'div' && e.attrs && e.attrs.className.includes('DiscussionListItem-content')
      );
      discussionListItemContent.children[0] = (
        <div className='DiscussionListItem-author-container'>{[discussionListItemContent.children[0], discussionListItemContent.children[1]]}</div>
      );

      delete discussionListItemContent.children[1];

      discussionListItemContent.children[3] = <div className='DiscussionListItem-stats'>{discussionListItemContent.children[3]}</div>;

      let footerAlpha = discussionDesignOption.opacityFooter;
      if (parentTagFound) {
        if (childTagFound == null) {
          childTagFound = parentTagFound;
        }
        let footerColor = discussionDesignOption.isPrimaryTagBackgroundColorRequired ? parentTagFound.color(): discussionDesignOption.primaryBackgroundColor;
        let footerColorAlpha = hexToRGB(footerColor, footerAlpha);
        if (discussionDesignOption.isPrimaryTagAnButton) {
          let footerClassName = 'DiscussionListItem-footer';
          switch(discussionDesign) {
            case 'StickyNoteTab':
            case 'StickyNoteOutlineTab':
            case 'BasicTab':
            case 'BasicOutlineTab':
            case 'FlatTab':
            case 'FlatBorderTab':
              footerClassName = 'DiscussionListItem--tabfooter';
              break;
          }
          discussionListItemContent.children.push(
            <span class={footerClassName}>
              <span class="PrimaryTagLabel" style={'background:' + footerColorAlpha}>
                <span class={classList("PrimaryTagLabel-text", (discussionDesignOption.primaryFontClass ? discussionDesignOption.primaryFontClass: textContrastClass(footerColor)))}>
                  <i class={'PrimaryTagLabel-icon ' + parentTagFound.data.attributes.icon + " fa-1x"}></i>
                  <span class="PrimaryTagLabel-name">{parentTagFound.data.attributes.name}</span>
                </span>
              </span>{secondaryTags}
            </span>
          );
        } else {
          discussionListItemContent.children.push(
            <span class={classList('DiscussionListItem-footer', (discussionDesignOption.primaryFontClass ? discussionDesignOption.primaryFontClass: textContrastClass(footerColor)))} style={'background:' + footerColorAlpha }>
              <span class='DiscussionListItem--primary'>
                <i aria-hidden="true" class={'TagLabel-icon ' + parentTagFound.data.attributes.icon + " fa-1x"}></i>{parentTagFound.data.attributes.name}
              </span>{secondaryTags}
            </span>
          );
        }
      }
      
      let backgroundColor = discussionDesignOption.outlineBackgroundColor;
      let outlineAlpha = discussionDesignOption.opacityOutline;
      if (childTagFound) {
        backgroundColor = childTagFound.color();
      }
      backgroundColor = hexToRGB(backgroundColor, outlineAlpha);
      switch(discussionDesign) {
        case 'StickyNoteTab':
        case 'BasicTab':
          if(childTagFound) {
            discussionListItemContent.children.push(
              <span class='DiscussionListItem--outline' style={'box-shadow:' +('inset -15px -15px 0px 0px '+backgroundColor)}>
              </span>
            );
          }
          break;
        case 'StickyNoteOutline':
        case 'StickyNoteOutlineTag':
        case 'StickyNoteOutlineBanner':
        case 'BasicOutline':
        case 'BasicOutlineTag':
        case 'BasicOutlineBanner':
          discussionListItemContent.children.push(
            <span class='DiscussionListItem--outline' style={'box-shadow:' +('inset -6px -6px 0px 0px '+backgroundColor+'; height: 100%; bottom: 0;')}>
            </span>
          );
          break;
        case 'FlatBorder':
        case 'FlatBorderTag':
        case 'FlatBorderBanner':
          discussionListItemContent.children.push(
            <span class='DiscussionListItem--outline' style={'box-shadow:' +('inset 0 0 0 4px '+backgroundColor+'; height: 100%; bottom: 0;')}>
            </span>
          );
          break;
        case 'StickyNoteOutlineTab':
        case 'BasicOutlineTab':
          if(childTagFound) {
            discussionListItemContent.children.push(
              <span class='DiscussionListItem--outline' style={'box-shadow:' +('inset -6px -6px 0px 0px '+backgroundColor+';height: calc(100% - 18px); bottom: 18px;')}>
              </span>
            );
          } else {
            discussionListItemContent.children.push(
              <span class='DiscussionListItem--outline' style={'box-shadow:' +('inset -6px -6px 0px 0px '+backgroundColor+'; height: 100%; bottom: 0;')}>
              </span>
            );
          }
          break;
        case 'FlatBorderTab':
          if(childTagFound) {
            discussionListItemContent.children.push(
              <span class='DiscussionListItem--outline' style={'box-shadow:' +('inset 0 0 0 4px '+backgroundColor+';height: calc(100% - 18px); bottom: 22px;')}>
              </span>
            );
          } else {
            discussionListItemContent.children.push(
              <span class='DiscussionListItem--outline' style={'box-shadow:' +('inset 0 0 0 4px '+backgroundColor+'; height: 100%; bottom: 0;')}>
              </span>
            );
          }
          break;
      }
      const foldedClassname = discussionDesignOption.unreadCSS;
      let backgroundAlpha = discussionDesignOption.opacityBackground;
      if (childTagFound) {
        vnode.attrs.style = {'background': (discussionDesignOption.isChildTagBackgroundColorRequired? hexToRGB(childTagFound.color(), backgroundAlpha): hexToRGB(discussionDesignOption.childBackgroundColor, backgroundAlpha)), ...(vnode.attrs.style || {}) };
      } else {
        vnode.attrs.style = {'background': hexToRGB(discussionDesignOption.childBackgroundColor, backgroundAlpha), ...(vnode.attrs.style || {}) };
      }
      if (discussion.isUnread()) {
        discussionListItemContent.children.push(<span class={'DiscussionListItem--unreadoutline'+foldedClassname} style={'background:' +discussionDesignOption.unreadColor+ '; color:' +discussionDesignOption.unreadColor}></span>);
      }
      if (foldedClassname == 'folded') {
        if (childTagFound) {
          vnode.attrs.style = {'background': (discussionDesignOption.isChildTagBackgroundColorRequired? childTagFound.color(): discussionDesignOption.childBackgroundColor), ...(vnode.attrs.style || {}) };

          discussionListItemContent.children.push(<span class={'DiscussionListItem--read'+foldedClassname} style={'border-color:' + (discussionDesignOption.isOutlineTagBackgroundColorRequired ? childTagFound.color() : discussionDesignOption.outlineBackgroundColor)}></span>);
        } else {
          discussionListItemContent.children.push(<span class={'DiscussionListItem--read'+foldedClassname} style={'border-color:' + discussionDesignOption.outlineBackgroundColor}></span>);
        }
      }
      vnode.attrs.className += ' TagWithThemes ' + discussionDesign;
    }
  });
  function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
      return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
      return "rgb(" + r + ", " + g + ", " + b + ")";
    }
  }

  override(DiscussionListItem.prototype, 'mainView', function () {
    const discussion = this.attrs.discussion;
    const jumpTo = this.getJumpTo();
    if (discussion.isTagWithThemesEnabled()) {
      initialiseThemeBuilder(discussion.tags(), app);
      if (discussionDesignOption) {
        let textContrastColor = textContrastClass(discussionDesignOption.childBackgroundColor);
        // Override text color depending if isChildTagBackgroundColorRequired
        if (discussionDesignOption.isChildTagBackgroundColorRequired) {
          if (childTagFound) {
            textContrastColor = (discussionDesignOption.childFontClass ? discussionDesignOption.childFontClass: textContrastClass(childTagFound.color()));
          } else if (parentTagFound) {
            textContrastColor = (discussionDesignOption.childFontClass ? discussionDesignOption.childFontClass: textContrastClass(parentTagFound.color()));
          }
        }
        return (
          <Link href={app.route.discussion(discussion, jumpTo)} className='DiscussionListItem-main'>
            <h2 className={classList("DiscussionListItem-title-edit", textContrastColor)}>{highlight(discussion.title(), this.highlightRegExp)}</h2>
            <ul className={classList("DiscussionListItem-info-edit", textContrastColor)}>{listItems(this.infoItems().toArray())}</ul>
          </Link>
        );
      }
    }

    return (
      <Link href={app.route.discussion(discussion, jumpTo)} className="DiscussionListItem-main">
        <h2 className="DiscussionListItem-title">{highlight(discussion.title(), this.highlightRegExp)}</h2>
        <ul className="DiscussionListItem-info">{listItems(this.infoItems().toArray())}</ul>
      </Link>
    );
  });

  extend(DiscussionListItem.prototype, 'infoItems', function (items) {
    const discussion = this.attrs.discussion;
    if (discussion.isTagWithThemesEnabled() && !discussionDesignOption) {
      // Double check, because mainView isn't invoke first on random Discussion (most likely a bug), this cause discussionDesignOption to be null. This new bug is detectable because of the new permission group, allow discussion to skip TagWithThemes therefore we need to check discussionDesignOption is null.
      initialiseThemeBuilder(discussion.tags(), app);
    }
    if (discussionDesignOption) {
      let childTag = null;
      if (discussion.tags() && discussion.tags().length > 1) {
        for (const tag of discussion.tags()) {
          if (tag.data.attributes.isChild) {
            childTag = tag;
            break;
          }
        }
      }

      if (!items.has('excerpt')) {
        const firstPost = discussion.firstPost();

        if (firstPost) {
          const excerpt = truncate(firstPost.contentPlain(), 175);

          items.add('excerpt', <div>{excerpt}</div>, -100);
        }
      }

      // Display tag
      if (items.has('tags')) {
        items.remove('tags');
      }

      if (childTag) {
        items.add('tag', 
          <span class='TagLabel-inner'><center><i aria-hidden="true" class={'TagLabel-icon ' + childTag.data.attributes.icon + " fa-1x"}></i>{childTag.data.attributes.name}</center></span>, -100);
      } else {
        items.add('tag', <span class='TagLabel-inner'></span>, -100);
      }
    }
  });
}