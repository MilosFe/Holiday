(function () {
    "use strict";
    /* Module is declared inside an "IIFE" so it doesn't go in the global space
     * It's better to do angular.module('name') without brackets
     * then attach controller/service */
  
    angular.module('HolidayApp', ['ngRoute']);
   
})();