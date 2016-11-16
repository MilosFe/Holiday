(function () {
    "use strict";
    /* @description This is our stars directive, it simple logic that can be upgraded for rating on the fly */

    angular.module('HolidayApp')
        .directive('starR', function () {
            return {
                restrict: 'EA',
                template: '<ul class="rating">' +
                '<li ng-repeat="star in stars" ng-class="star">' +
                '<i class="fa fa-star"></i>' +
                '</li>' +
                '</ul>',
                scope: {
                    ratingValue: '=',
                    max: '='
                },
                link: function (scope, elem, attrs) {
                    scope.stars = [];
                    for (var i = 0; i < scope.max; i++) {
                        scope.stars.push({
                            filled: i < scope.ratingValue
                        });
                    }
                }
            }
        });
})();