import $ from 'jquery';
import $nav from './nav';
import renderNewMessage from './new-message';
import remove from './remove';
import interval from './interval';

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
    $.ajax({
        url: apiURL,
        success: function(data) {
            data.forEach((message) => {
                let $chats = $(`
          <li class="new-message">
            <span>${message.body}</span>
            <ul class="message-meta-data">
              <li class="message-sender">${message.sender}</li>
              <li class="message-timestamp">${message.timestamp}</li>
              <li class="delete"><input type="button" name="delete" value="delete" data-id="${message._id}"/></li>
            </ul>
          </li>
          `);
              $('#conversation').append($chats);
            });
            $('.delete').children('input').on('click', remove);


        },
        error: function(error) {
            console.log('something went wrong fetching messages', error);
        }
    });
    $('#send-message').on('click', function (evt) {
      evt.preventDefault();
      renderNewMessage();
    });
}

export default renderChats;
