import $ from 'jquery';
import renderChats from './chat-window';

const apiURL = 'https://tiny-za-server.herokuapp.com/collections/carynsBetterChats';

function remove (evt) {
  let $id = $(this).attr('data-id');
  $.ajax({
    url: apiURL + '/' + $id,
    type: 'DELETE',
    dataType: 'json',
    success: function(response) {
      console.log(response + 'was deleted');
      renderChats();
    }
  });
}

export default remove;
