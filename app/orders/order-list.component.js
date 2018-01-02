"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var order_service_1 = require("./order.service");
var OrderListComponent = /** @class */ (function () {
    function OrderListComponent(_orderService) {
        this._orderService = _orderService;
        this.deviceName = "Order List";
        this.displayImages = true;
        this.listDevices = false;
        this.gridDevices = true;
        this.imageWidth = 100;
    }
    OrderListComponent.prototype.toggleImage = function () {
        this.displayImages = !this.displayImages;
    };
    OrderListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._orderService.getOrders()
            .subscribe(function (devices) { return _this.devices = devices; }, function (error) { return _this.errorMessage = error; });
    };
    OrderListComponent.prototype.showListDevices = function () {
        this.gridDevices = false;
        this.listDevices = true;
    };
    OrderListComponent.prototype.showGridDevices = function () {
        this.listDevices = false;
        this.gridDevices = true;
    };
    OrderListComponent.prototype.onRatingClicked = function (message) {
        this.deviceName = 'Order List :' + message;
    };
    OrderListComponent = __decorate([
        core_1.Component({
            selector: 'dev-order',
            templateUrl: 'app/orders/order-list.component.html',
            styleUrls: ['app/orders/order-list.component.css']
        }),
        __metadata("design:paramtypes", [order_service_1.OrderService])
    ], OrderListComponent);
    return OrderListComponent;
}());
exports.OrderListComponent = OrderListComponent;
//# sourceMappingURL=order-list.component.js.map