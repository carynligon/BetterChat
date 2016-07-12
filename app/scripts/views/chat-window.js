import $ from 'jquery';
import $nav from './nav';
import renderNewMessage from './new-message';
import remove from './remove';
import interval from './interval';
import session from '../models/username';
import router from '../router';
import refresh from './interval';

const apiURL = 'https://tiny-za-server.herokuapp.com/collections/carynsBetterChats';

function renderChats() {
    let $chatWindow = $(`
    <div class="chat">
      <div class="chat-window">
        <ul id="conversation">
        </ul>
      </div>
    </div>
    `);
    let $newMessage = $(`
      <form class="send-message">
        <input type="text" name="your-message" placeholder="type your message" id ="new-message-box" />
        <input type="submit" id="send-message" name="send" value="send">
      </form>
      `);
    $('.container').empty().append($nav).append($chatWindow).append($newMessage);
    refresh();


    $('#new-message-box').on('keypress', function (evt) {
      if (evt.which === 13) {
        evt.preventDefault();
        renderNewMessage();
      }
    });
    $('#send-message').on('click', function (evt) {
      evt.preventDefault();
      renderNewMessage();
    });
}

export default renderChats;
