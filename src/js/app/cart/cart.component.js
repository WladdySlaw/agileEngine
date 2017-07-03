angular.module('agileEngine')
    .component('cart', {
        template: require('./cart.html'),
        controller: function (CoreService) {
            var $ctrl = this;

            function checkPrice(){
                $ctrl.selectedPrice = 0;
                $ctrl.selectedData.map(function(element){
                    $ctrl.selectedPrice = element.price + $ctrl.selectedPrice;
                });
            }

            $ctrl.selectedData = CoreService.getSelectedData();
            checkPrice();   
            
            $ctrl.removeElement = function(element, index){
                $ctrl.selectedData.splice(index, 1);
                checkPrice();
                console.log($ctrl.selectedPrice);
            }

            $ctrl.submitOrder = function(){
                CoreService.postOrder($ctrl.selectedData, new Date(), $ctrl.selectedPrice);
                $ctrl.selectedData = [];
                $ctrl.selectedPrice = 0;
            }
        }
    });