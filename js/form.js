$(document).ready(function() {
    $("#my-form").validate( {
        rules: {

            "name": {
                required: true, rangelength: [2, 30]
            }
            ,
            "email": {
                required: true, email: true, minlength: 5
            },
            "phone":{
              digits:true
            }

        }
        ,
        messages: {
            "name": {
                required: "We still need your name"
            }
            ,
            "email": {
                required: "You should know that this is required..."
            },

            "phone":{
              digits:"Must be numbers only"
            }
        }
    }
    );
}
);
