(function () {
    'use strict';
    /* Hotel Controller function is separated  and code looks cleaner and easy to read */
    angular.module('HolidayApp')
        .controller('hotelCtrl', hotelCtrl);


    ////////Hotel Controller function

    function hotelCtrl($scope, $q, HotelService) {
        var self = this;
        self.limit = 5;
        self.list = [];
        self.error = false;
        self.reviewError = false;
        self.stars = [1, 2, 3, 4, 5];
        self.revList = {};

        /* @description  */

        function activate() {
            toastr.info('Holiday view active');
        }

        self.getHotels =function () {
            HotelService.get().then(resolving);

        }

        self.minStars = function (number) {
            HotelService.minStars(number).then(resolving);
        }

        self.loadMore = function () {
            self.limit = self.limit + 5;
        }


        self.loadReview = function (id, index) {
            self.reviewError = false;
            if (self.revList[index]) {
                return self.revList;
            }
            else {
                HotelService.reviews(id).then(function (data) {
                    if (data.data == 0) {
                        self.reviewError = true;
                        return self.revList[index] = null;
                    }
                    else {
                        return self.revList[index] = data.data;
                    }
                });
            }

        }


        function resolving(data) {
            if (data) {
                toastr.info('Loaded Hotels');
                self.limit = 5;
                self.error = false;
                return self.list = data.data;

            }
            else {
                self.error = true;
                self.limit = 0;
                toastr.warning('No data to display');
            }
        }

        activate();

    }


})()
