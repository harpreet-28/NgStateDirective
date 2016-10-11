var OrderController = function OrderController() {

        var self = this;

       self.orderNameOne = 'Coca-cola';
       self.orderNameTwo = 'Pepsi-cola';
       self.orderCounterOne = 5;
       self.orderCounterTwo = 5;
};

angular
    .module('app')
    .controller('OrderController', OrderController);
