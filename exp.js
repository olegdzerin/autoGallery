$(document).ready(function(){
    $('.newsletterForm').on('submit', function(evt){
        evt.preventDefault();
        var action = $(this).attr('action');
        var $container = $(this).closest('.formContainer');
        $.ajax({
            url: action,
            type: 'POST',
            data: $(this).serialize(),
            success: function(data){
                if(data.success){
                    $container.html('<h2>Thank you!</h2>');
                } else {
                    $container.html('There was a problem.');
                }
            },
            error: function(){
                $container.html('There was a problem.');
            }
        });
    });
});

const form = document.getElementById('login');

form.addEventListener('submit', (e) => {
    console.log(2)
    e.preventDefault();
//    fetch('localhost:3000/login').then(res => console.log(res))
    const email = form.email.value;
    const password = form.password.value;
    if (localStorage.email === email && localStorage.password === password) {
        console.log('ok')
    }

})