import $ from 'jquery';
import $nav from './nav';
import renderNewMessage from './new-message';
import remove from './remove';
import interval from './interval';
import session from '../models/username';
import router from '../router';

const apiURL = 'https://tiny-za-server.herokuapp.com/collections/carynsBetterChats';

function refresh () {
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
  $('.chat').empty().append($chatWindow);
  $.ajax({
      url: apiURL,
      success: function(data) {
          data.forEach((message) => {
            let $chats = '';
            if (message.sender === session.username) {
              $chats = $(`
                <li class="new-message your-message">
                  <span class="your-message-body">${message.body}</span>
                  <ul class="message-meta-data">
                    <li class="message-sender">${message.sender}</li>
                    <li class="message-timestamp">${message.timestamp}</li>
                    <li class="delete"><input type="button" name="delete" value="delete" data-id="${message._id}"/></li>
                  </ul>
                </li>
                `);
            } else {
              $chats = $(`
                <li class="new-message">
                  <span>${message.body}</span>
                  <ul class="message-meta-data">
                    <li class="message-sender">${message.sender}</li>
                    <li class="message-timestamp">${message.timestamp}</li>
                  </ul>
                </li>
                `);
            }
            $('#conversation').prepend($chats);
          });
          $('.delete').children('input').on('click', remove);


      },
      error: function(error) {
          console.log('something went wrong fetching messages', error);
      }
  });
}

export default refresh;
