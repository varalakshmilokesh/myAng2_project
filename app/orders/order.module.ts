import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {OrderListComponent} from './order-list.component';
import {OrderFilterPipe} from './order-filter.pipe';
import {OrderDetailComponent} from './order-detail.component';
import {OrderService} from './order.service';
import { MakeStarsModule } from '../makeStars/makeStars.module';

@NgModule({
    imports:[
         MakeStarsModule,
         RouterModule.forChild([
            {path:'orders',component:OrderListComponent},
            {path:'device/:DeviceName',component:OrderDetailComponent},
         ])
    ],
    declarations:[
        OrderListComponent,
        OrderFilterPipe,
        OrderDetailComponent
    ],
    providers:[OrderService]
})

export class OrderModule{

}