import $ from 'jquery';
import $chatWindow from './views/chat-window';
import renderChats from './views/chat-window';
import $newMessage from './views/new-message';
import renderLogin from './views/login';
import session from './models/username';
import refresh from './views/interval';

let interval = '';

function router() {
  var hash = location.hash;
  if (hash === '#login') {
    window.clearInterval(interval);
    renderLogin();
  } else if (hash === '#chat') {
    // interval = window.setInterval(refresh, 7000);
    $('.container').empty();
    $('.container').append($chatWindow);
  }
}

export default router;
