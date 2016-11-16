(function () {
    'use strict';
    /*@description This is routing system for HolidayPirates app*/
    angular.module('HolidayApp')
        .config(holidayRoutes);

    function holidayRoutes($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: 'js/hotels/hotel.html',
            controller: 'hotelCtrl',
            controllerAs: "hotels",
        })
    }
})();