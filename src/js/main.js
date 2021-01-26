import './vendor';
import './helpers';
$(document).ready(function() {
    $('.menu-burger__header').click(function(event) {
        $('.menu-burger__header, .header__ul').toggleClass('Active');
    });
});