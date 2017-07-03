angular.module('agileEngine')
    .service('CoreService', function ( $http ) {
    var $ctrl = this;

    $ctrl.getGlobalData = function () {
        var url = '/js/data.json';
        return $http.get(url);
    };

    $ctrl.selectedData = []; 
    $ctrl.orderHistory = [];

    $ctrl.postSelectedData = function(element){
        $ctrl.selectedData.push(element);
    }

    $ctrl.getSelectedData = function() {
        return $ctrl.selectedData;
    }

    $ctrl.postOrder = function(elements, date, price){
        var order = {
            elements,
            date,
            price
        }
        $ctrl.orderHistory.push(order);
        $ctrl.selectedData = [];
    }
    $ctrl.getOrders = function(element){
        return $ctrl.orderHistory;
    }

});