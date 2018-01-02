import {Component,OnInit} from '@angular/core';
import {Iorder} from './order';
import {ActivatedRoute,Router} from '@angular/router';

@Component({

    templateUrl:'app/orders/order-detail.component.html'
})

export class OrderDetailComponent implements OnInit{
    deviceName:string="order details";

    constructor(private _route:ActivatedRoute,private _router:Router){

    }

    ngOnInit():void{
        let DeviceName=this._route.snapshot.params['DeviceName'];
        this.deviceName += `:${DeviceName}`;
    }

    onBack():void{
        this._router.navigate(['/orders']);
    }
    
}