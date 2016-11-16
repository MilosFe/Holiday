   /*globals $:false */
(function (global, $, toastr) {
    'use strict';
    
    $('header i').click(function(){
        $('header ul').fadeToggle();
    });

    toastr.options = {
        "debug": false,
        "positionClass": "toast-bottom-right",
        "onclick": null,
        "fadeIn": 300,
        "fadeOut": 1000,
        "timeOut": 2000,
        "extendedTimeOut": 2000
    }
}(window, $, toastr));
    



