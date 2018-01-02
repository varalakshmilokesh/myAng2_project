import {Component , OnInit} from '@angular/core';
import {Iorder} from './order';
import {OrderService} from './order.service';

@Component({
    selector:'dev-order',
    templateUrl:'app/orders/order-list.component.html',
    styleUrls:['app/orders/order-list.component.css']
})

export class OrderListComponent implements OnInit{
    deviceName: string="Order List";
    deviceFilter:string;
    errorMessage: string;
    displayImages:boolean=true;
    listDevices:boolean=false;
    gridDevices:boolean=true;
    imageWidth:number=100;
   // keyboard:boolean=true;
   // devices:boolean=true;bcoz of ngIf if the variable is present then it will display the table
    devices:Iorder[];

    constructor(private _orderService: OrderService){

    }
    
        toggleImage(): void { // after event binding,function is displaying here
            this.displayImages = !this.displayImages;
        }

        ngOnInit(): void {
            this._orderService.getOrders()
            .subscribe(devices=>this.devices=devices,
            error=>this.errorMessage=<any>error);
        }
        showListDevices(): void{
            this.gridDevices=false;
            this.listDevices=true;
        }
        showGridDevices(): void{
            this.listDevices=false;
            this.gridDevices=true;
        }
        
        onRatingClicked(message:string): void{
          this.deviceName= 'Order List :' + message;
        }
    }
