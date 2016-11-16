(function () {
    
/*@description Hotel Service for making REST api calls, we send params in simple one
* line code instead of typing params, headers, in real API this would be more verbose 
* We used revealing module pattern */
    
    angular.module('HolidayApp')
        .factory('HotelService', HotelService);

    function HotelService($http, $log) {
        var service = {
            get: get,
            minStars: minStars,
            reviews: reviews
        }

        return service;

        //Service Function

        function get() {
            return $http.get("htt//fake-hotel-api.herokuapp.com/api/hotels")
                .then(success)
                .catch(fail);
            ;
        }

        function minStars(number) {
            return $http.get("http://fake-hotel-api.herokuapp.com/api/hotels?min_stars=" + number)
                .then(success)
                .catch(fail);
        }

        function reviews(id) {
            return $http.get("http://fake-hotel-api.herokuapp.com/api/reviews?hotel_id=" + id)
                .then(success)
                .catch(fail);
        }


        //Success and error functions

        function success(data) {
            return data;
        }

        function fail(response) {
            $log.info("Something went wrong");
        }
    }

})();
