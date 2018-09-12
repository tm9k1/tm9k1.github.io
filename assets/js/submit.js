// magic.js
$(document).ready(function() {

    // process the form
    $('form').submit(function(event) {

        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = {
            'name'              : $('input[name=name]').val(),
            'email'             : $('input[name=email]').val(),
            'message'    : $('textarea[name=message]').val()
        };

        // process the form
        $.ajax({
            type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url         : 'https://script.google.com/macros/s/AKfycby_hOCPRAwMDXfct2NFD15ifNYpl-2ZFZh6lLsk/exec', // the url where we want to POST
            data        : formData, // our data object
            dataType    : 'json', // what type of data do we expect back from the server
            encode      : true
        })
            // using the done promise callback
            .done(function(data) {

                // log data to the console so we can see
                console.log(data); 
                alert("Your message was sent!")
                // here we will handle errors and validation messages
            });

        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();
    });

});
