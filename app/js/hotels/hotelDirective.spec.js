describe('Unit testing for stars directive', function() {
    var $compile,
        $rootScope;

    // Load the myApp module, which contains the directive
    beforeEach(angular.mock.module('HolidayApp'));

    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(inject(function(_$compile_, _$rootScope_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    /* Font awesome is used instead of unicode stars, so compiled element is actually <i></i>  */

    it('Replaces directive with stars', function() {
        // Compile a piece of HTML containing the directive
        var element = angular.element('<star-R rating-value="2" max="5"></star-R>>');
        $compile(element)($rootScope);

        $rootScope.$apply();
        expect(element.html()).toEqual('<ul class="rating"><!-- ngRepeat: star in stars --><li ng-repeat="star in stars" ng-class="star" class="ng-scope filled $$hashKey"><i class="fa fa-star"></i></li><!-- end ngRepeat: star in stars --><li ng-repeat="star in stars" ng-class="star" class="ng-scope filled $$hashKey"><i class="fa fa-star"></i></li><!-- end ngRepeat: star in stars --><li ng-repeat="star in stars" ng-class="star" class="ng-scope $$hashKey"><i class="fa fa-star"></i></li><!-- end ngRepeat: star in stars --><li ng-repeat="star in stars" ng-class="star" class="ng-scope $$hashKey"><i class="fa fa-star"></i></li><!-- end ngRepeat: star in stars --><li ng-repeat="star in stars" ng-class="star" class="ng-scope $$hashKey"><i class="fa fa-star"></i></li><!-- end ngRepeat: star in stars --></ul>')
    });
});