angular.module('agileEngine')
    .component('history', {
        template: require('./history.html'),
        controller: function (CoreService) {
            var $ctrl = this;

            $ctrl.orders = CoreService.getOrders();
            console.log($ctrl.orders);
        }
    });