$(document).ready(function() {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');

        $('#logo').toggleClass('shrink')

        $('.header').toggleClass('push')
    });

    
});