$(document).ready(function(){

    function removeToggleClass(){
    $('#toggle-on').removeClass('d-md-inline');
    $('#toggle-on').removeClass('d-none');
    $('#toggle-off').removeClass('d-inline');
    $('#toggle-off').removeClass('d-md-none');
}


    $('#toggle-on').click(function(){
        $('.sidebar').fadeOut(400);

        setTimeout(function(){
        removeToggleClass();
        $('#toggle-on').addClass('d-none');
        $('#toggle-off').removeClass('d-none');
    }, 400)
    })

    $('#toggle-off').click(function(){
        $('.sidebar').fadeIn(400);

        setTimeout(function(){
        removeToggleClass();
        $('#toggle-on').removeClass('d-none');
        $('#toggle-off').addClass('d-none');
    }, 400)
    })

    $('#menu-toggle').click(function(){
        $('#body-header').toggle(400);
    })
})

