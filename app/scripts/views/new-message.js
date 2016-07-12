import $ from 'jquery';
import session from '../models/username';
import renderChats from './chat-window';

const apiURL = 'https://tiny-za-server.herokuapp.com/collections/carynsBetterChats';

function renderNewMessage () {
    const data = {
      sender: session.username,
      body: $('#new-message-box').val(),
      timestamp: new Date()
    };

    $.ajax({
      url: apiURL,
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(data),
      success: function(response) {
        console.log(response);
        location.hash = '#chat';
        renderChats();
      }
    });
}


export default renderNewMessage;
