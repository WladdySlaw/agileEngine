angular.module('agileEngine')
    .component('main', {
        template: require('./main.html'),
        controller: function (CoreService, $timeout) {
            var $ctrl = this;
            $ctrl.notification = false;
            $ctrl.price = '';

            CoreService.getGlobalData()
                       .then(function(res){
                            $ctrl.data = res.data;
            });

            $ctrl.sortByPrice = function(){
                $ctrl.price === 'price' ? $ctrl.price = '' : $ctrl.price = 'price'
            }

            $ctrl.addToCart = function(id, item){
                $ctrl.data.splice(id, 1)
                CoreService.postSelectedData(item);
                $ctrl.notification = true;
                $timeout(function(){
                    $ctrl.notification = false;
                }, 1500);
            }
        }
    });