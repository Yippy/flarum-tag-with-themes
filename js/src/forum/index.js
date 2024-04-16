import { extend, override } from 'flarum/common/extend';
import DiscussionListItem from 'flarum/forum/components/DiscussionListItem';
import { truncate } from 'flarum/utils/string';
import textContrastClass from 'flarum/common/helpers/textContrastClass';
import classList from 'flarum/common/utils/classList';
import Link from 'flarum/common/components/Link';
import highlight from 'flarum/common/helpers/highlight';
import listItems from 'flarum/common/helpers/listItems';

const designOptions = {
  "StickyNote": {
    isPrimaryTagBackgroundColorRequired: false,
    isPrimaryTagAnButton: false,
    primaryBackgroundColor: '#e8ecf3',
    isChildTagBackgroundColorRequired: true,
    childBackgroundColor: '#e8ecf3',
    isOutlineTagBackgroundColorRequired: false,
    outlineBackgroundColor: '#595a58',
    unreadColor: '#2199fc',
  },
  "StickyNoteTag": {
    isPrimaryTagBackgroundColorRequired: true,
    isPrimaryTagAnButton: true,
    primaryBackgroundColor: '#e8ecf3',
    isChildTagBackgroundColorRequired: true,
    childBackgroundColor: '#e8ecf3',
    isOutlineTagBackgroundColorRequired: false,
    outlineBackgroundColor: '#595a58',
    unreadColor: '#2199fc',
  },
  "StickyNoteFilingTag": {
    isPrimaryTagBackgroundColorRequired: true,
    isPrimaryTagAnButton: true,
    primaryBackgroundColor: '#e8ecf3',
    isChildTagBackgroundColorRequired: true,
    childBackgroundColor: '#e8ecf3',
    isOutlineTagBackgroundColorRequired: false,
    outlineBackgroundColor: '#595a58',
    unreadColor: '#2199fc',
  },
  "StickyNoteBanner": {
    isPrimaryTagBackgroundColorRequired: true,
    isPrimaryTagAnButton: false,
    primaryBackgroundColor: '#e8ecf3',
    isChildTagBackgroundColorRequired: true,
    childBackgroundColor: '#e8ecf3',
    isOutlineTagBackgroundColorRequired: false,
    outlineBackgroundColor: '#595a58',
    unreadColor: '#2199fc',
  },
  "StickyNoteMinimal": {
    isPrimaryTagBackgroundColorRequired: false,
    isPrimaryTagAnButton: false,
    primaryBackgroundColor: 'transparent',
    isChildTagBackgroundColorRequired: false,
    childBackgroundColor: '#e8ecf3',
    isOutlineTagBackgroundColorRequired: true,
    outlineBackgroundColor: '#595a58',
    unreadColor: '#2199fc',
  },
  "StickyNoteMinimalTag": {
    isPrimaryTagBackgroundColorRequired: true,
    isPrimaryTagAnButton: true,
    primaryBackgroundColor: '#e8ecf3',
    isChildTagBackgroundColorRequired: false,
    childBackgroundColor: '#e8ecf3',
    isOutlineTagBackgroundColorRequired: true,
    outlineBackgroundColor: '#595a58',
    unreadColor: '#2199fc',
  },
  "StickyNoteMinimalFilingTag": {
    isPrimaryTagBackgroundColorRequired: true,
    isPrimaryTagAnButton: true,
    primaryBackgroundColor: '#e8ecf3',
    isChildTagBackgroundColorRequired: false,
    childBackgroundColor: '#e8ecf3',
    isOutlineTagBackgroundColorRequired: true,
    outlineBackgroundColor: '#595a58',
    unreadColor: '#2199fc',
  },
  "StickyNoteMinimalBanner": {
    isPrimaryTagBackgroundColorRequired: true,
    isPrimaryTagAnButton: false,
    primaryBackgroundColor: '#e8ecf3',
    isChildTagBackgroundColorRequired: false,
    childBackgroundColor: '#e8ecf3',
    isOutlineTagBackgroundColorRequired: true,
    outlineBackgroundColor: '#595a58',
    unreadColor: '#2199fc',
  }
};

app.initializers.add('yippy-tag-with-themes', () => {
  extend(DiscussionListItem.prototype, 'view', function (vnode) {
    const discussionListItemContent = vnode.children.find(
      (e) => e && e.tag === 'div' && e.attrs && e.attrs.className.includes('DiscussionListItem-content')
    );
    let discussionDesign = app.forum.attribute('yippy-tag-with-themes.designDefault');
    let discussionDesignOption = designOptions[discussionDesign];

    discussionListItemContent.children[0] = (
      <div className='DiscussionListItem-author-container'>{[discussionListItemContent.children[0], discussionListItemContent.children[1]]}</div>
    );

    delete discussionListItemContent.children[1];

    discussionListItemContent.children[3] = <div className='DiscussionListItem-stats'>{discussionListItemContent.children[3]}</div>;

    let childTagFound = null;
    let parentTagFound = null;
    if (this.attrs.discussion.tags() && this.attrs.discussion.tags().length > 0) {
      // Collect all secondary tags that has position set as 'null'
      let secondaryTags = {
        tag: "span",
        attrs: {
          class: 'DiscussionListItem--secondary',
          style: {
          },
        },
        children: []
      };
      for (const tag of this.attrs.discussion.tags()) {
        if (tag.data.attributes.isChild) {
          childTagFound = tag;
        } else if (tag.data.attributes.position == null) {
          secondaryTags.children.push(
            <span class="TagLabel" style={'--tag-bg:' + tag.color()}>
              <span class={classList("TagLabel-text", textContrastClass(tag.color()))}>
                <i class={'TagLabel-icon ' + tag.data.attributes.icon }></i>
                <span class="TagLabel-name">{tag.data.attributes.name}</span>
              </span>
            </span>
          );
        } else {
          parentTagFound = tag;
        }
      };

      if (parentTagFound) {
        if (childTagFound == null) {
          childTagFound = parentTagFound;
        }
        let footerColor = discussionDesignOption.isPrimaryTagBackgroundColorRequired ? parentTagFound.color(): discussionDesignOption.primaryBackgroundColor;
        if (discussionDesignOption.isPrimaryTagAnButton) {
          discussionListItemContent.children.push(
            <span class={( discussionDesign == 'StickyNoteMinimalFilingTag' || discussionDesign == 'StickyNoteFilingTag' ? 'DiscussionListItem--filingfooter': 'DiscussionListItem-footer')}>
              <span class="PrimaryTagLabel" style={'background:' + parentTagFound.color()}>
                <span class={classList("PrimaryTagLabel-text", textContrastClass(parentTagFound.color()))}>
                  <i class={'PrimaryTagLabel-icon ' + parentTagFound.data.attributes.icon + " fa-1x"}></i>
                  <span class="PrimaryTagLabel-name">{parentTagFound.data.attributes.name}</span>
                </span>
              </span>{secondaryTags}
            </span>
          );
        } else {
          discussionListItemContent.children.push(
            <span class={classList('DiscussionListItem-footer', textContrastClass(footerColor))} style={'background:' + footerColor }>
              <span class='DiscussionListItem--primary'>
                <i aria-hidden="true" class={'TagLabel-icon ' + parentTagFound.data.attributes.icon + " fa-1x"}></i>{parentTagFound.data.attributes.name}
              </span>{secondaryTags}
            </span>
          );
        }
      }
    }
    let backgroundColor = discussionDesignOption.outlineBackgroundColor;
    if (childTagFound) {
      backgroundColor = childTagFound.color();
    }
    switch(discussionDesign) {
      case 'StickyNoteFilingTag':
        if(childTagFound) {
          discussionListItemContent.children.push(
            <span class='DiscussionListItem--outline' style={'box-shadow:' +('inset -15px -15px 0px 0px '+backgroundColor)}>
            </span>
          );
        }
        break;
      case 'StickyNoteMinimal':
      case 'StickyNoteMinimalTag':
      case 'StickyNoteMinimalBanner':
        discussionListItemContent.children.push(
          <span class='DiscussionListItem--outline' style={'box-shadow:' +('inset -6px -6px 0px 0px '+backgroundColor+'; height: 100%; bottom: 0;')}>
          </span>
        );
        break;
      case 'StickyNoteMinimalFilingTag':
        if(childTagFound) {
          discussionListItemContent.children.push(
            <span class='DiscussionListItem--outline' style={'box-shadow:' +('inset -6px -6px 0px 0px '+backgroundColor+';height: calc(100% - 25px); bottom: 18px;')}>
            </span>
          );
          break;
        } else {
          discussionListItemContent.children.push(
            <span class='DiscussionListItem--outline' style={'box-shadow:' +('inset -6px -6px 0px 0px '+backgroundColor+'; height: 100%; bottom: 0;')}>
            </span>
          );
        }

    }
    if (childTagFound) {
      vnode.attrs.style = {'background': (discussionDesignOption.isChildTagBackgroundColorRequired? childTagFound.color(): discussionDesignOption.childBackgroundColor), ...(vnode.attrs.style || {}) };

      discussionListItemContent.children.push(<span class=' DiscussionListItem--read' style={'border-color:' + (discussionDesignOption.isOutlineTagBackgroundColorRequired ? childTagFound.color() : discussionDesignOption.outlineBackgroundColor)}></span>);
    } else {
      vnode.attrs.style = {'background': discussionDesignOption.childBackgroundColor, ...(vnode.attrs.style || {}) };

      discussionListItemContent.children.push(<span class=' DiscussionListItem--read' style={'border-color:' + discussionDesignOption.outlineBackgroundColor}></span>);
    }
    if (this.attrs.discussion.isUnread()) {
      discussionListItemContent.children.push(<span class=' DiscussionListItem--unread' style={'border-color:' +discussionDesignOption.unreadColor}></span>);
    }
    vnode.attrs.className += ' ' + discussionDesign;
  });

  override(DiscussionListItem.prototype, 'mainView', function () {
    const discussion = this.attrs.discussion;
    const jumpTo = this.getJumpTo();

    let discussionDesign = app.forum.attribute('yippy-tag-with-themes.designDefault');
    let discussionDesignOption = designOptions[discussionDesign];

    let textContrastColor = textContrastClass(discussionDesignOption.childBackgroundColor);
    // Override text color depending if isChildTagBackgroundColorRequired
    if (discussionDesignOption.isChildTagBackgroundColorRequired) {
      if (this.attrs.discussion.tags() && this.attrs.discussion.tags().length > 0) {
        let childTagFound = null;
        let parentTagFound = null;
        for (const tag of this.attrs.discussion.tags()) {
          if (tag.data.attributes.isChild) {
            childTagFound = tag;
          } else if (tag.data.attributes.position >= 0) {
            parentTagFound = tag;
          }
        }
        if (childTagFound) {
          textContrastColor = textContrastClass(childTagFound.color());
        } else if (parentTagFound) {
          textContrastColor = textContrastClass(parentTagFound.color());
        }
      }
    }
    return (
      <Link href={app.route.discussion(discussion, jumpTo)} className='DiscussionListItem-main'>
        <h2 className={classList("DiscussionListItem-title-edit", textContrastColor)}>{highlight(discussion.title(), this.highlightRegExp)}</h2>
        <ul className={classList("DiscussionListItem-info-edit", textContrastColor)}>{listItems(this.infoItems().toArray())}</ul>
      </Link>
    );
  });

  extend(DiscussionListItem.prototype, 'infoItems', function (items) {
    let childTag = null;
    if (this.attrs.discussion.tags() && this.attrs.discussion.tags().length > 1) {
      for (const tag of this.attrs.discussion.tags()) {
        if (tag.data.attributes.isChild) {
          childTag = tag;
          break;
        }
      }
    }

    if (!items.has('excerpt')) {
      const firstPost = this.attrs.discussion.firstPost();

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
  });
});
