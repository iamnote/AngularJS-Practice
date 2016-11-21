var myDataBindingApp = angular.module('myDataBindingApp', [])
    .controller('myDataBindingController', ['$scope', function ($scope) {
        'use strict';
        $scope.name = "";
    }]);