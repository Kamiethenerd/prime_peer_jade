$(document).ready(function(){

    $('.addMessage').on('click', function(){
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: '/memes/messages'
        })
            .done(function(data){
                console.log(data);
            })

            .fail(function(jqXHR, textStatus, errorThrown){
                console.log('There was an error');
            })

            .always(function(){
                console.log('AJAX complete');
                location.reload(true);
            })
    });
});