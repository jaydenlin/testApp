angular.module('testapp', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate', 'myModule']);

angular.module('testapp').config(function ($stateProvider, $urlRouterProvider) {

    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

    $stateProvider.state("home", {
        url: "/home",
        views: {

            '': {
                templateUrl: "partial/my-partial/my-partial.html"
            },
            'oneView': {
                templateUrl: "partial/my-partial2/my-partial2.html"
            },
            'twoView': {

                templateUrl: "partial/my-partial3/my-partial3.html"
            }
        }
    }).state("home.list",{
        url:"/list",
        views: {

            '': {
                templateUrl:"partial/my-partial-list1/my-partial-list1.html"
            },
            'oneViewList': {
                templateUrl:"partial/my-partial-list2/my-partial-list2.html"
            },
            'twoViewList': {

                templateUrl:"partial/my-partial-list3/my-partial-list3.html"
            }
        }
        
    
    });

});

angular.module('testapp').run(function ($rootScope) {

    $rootScope.safeApply = function (fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof (fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});