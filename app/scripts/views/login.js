import $ from 'jquery';
import session from '../models/username';

function renderLogin () {
  let $login = $(`
    <div class="login">
      <form class="login-form">
        <h2>Login</h2>
        <input type="text" name="username" placeholder="username" />
        <input type="submit" name="submit" value="submit" />
      </form>
    </div>
    `);
    
    $('.container').empty();
    $('.container').append($login);

  $login.find('input[type="submit"]').on('click', function (evt) {
    evt.preventDefault();
    session.username = $(this).siblings('input').val();
    console.log(session);
    $(this).siblings('input').val('');
    location.hash = '#chat';
  });

  $login.find('input[type="submit"]').on('keypress', function (evt){
    if (evt.which === 13) {
      evt.preventDefault();
      session.username = $(this).siblings('input').val();
      console.log(session);
      $(this).siblings('input').val('');
      location.hash = '#chat';
    }
  });
}


export default renderLogin;
