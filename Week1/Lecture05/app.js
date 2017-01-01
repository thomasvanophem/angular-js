(function () {
    'use strict';

    angular.module('myFirstApp', [])
        .controller('MyFirstController', function($scope) {
            $scope.name = 'Thomas van Ophem';

            $scope.sayHello = function() {
                return 'Hello Coursera!';
            }
        });
})();
