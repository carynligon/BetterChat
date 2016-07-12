import $ from 'jquery';
import router from './router';

$(window).on('hashchange', router);

  router();

  $(document).ready(function (){
    location.hash = '#login';
  });
