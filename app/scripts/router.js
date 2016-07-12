import $ from 'jquery';
import $chatWindow from './views/chat-window';
import $newMessage from './views/new-message';
import $login from './views/login';

function router() {
  var hash = location.hash;
  if (hash === '#login') {
    $('.container').empty();
    $('.container').append($login);
  } else if (hash === '#chat') {
    $('.container').empty();
    $('.container').append($chatWindow);
  }
}

export default router;
