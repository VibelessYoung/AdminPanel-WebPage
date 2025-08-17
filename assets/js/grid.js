$(document).ready(function(){

    function removeToggleClass(){
    $('#toggle-on').removeClass('d-md-inline');
    $('#toggle-on').removeClass('d-none');
    $('#toggle-off').removeClass('d-inline');
    $('#toggle-off').removeClass('d-md-none');
}


    $('#toggle-on').click(function(){
        $('.sidebar').fadeOut(500);

        setTimeout(function(){
        removeToggleClass();
        $('#toggle-on').addClass('d-none');
        $('#toggle-off').removeClass('d-none');
    }, 500)
    })
})

