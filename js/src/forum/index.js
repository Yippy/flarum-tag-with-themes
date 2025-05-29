import Discussion from 'flarum/common/models/Discussion';
import Model from 'flarum/common/Model';
import editDiscussionListItem from './editDiscussionListItem';

app.initializers.add('yippy-tag-with-themes', () => {
  Discussion.prototype.isTagWithThemesEnabled = Model.attribute('isTagWithThemesEnabled');
  editDiscussionListItem();
});
