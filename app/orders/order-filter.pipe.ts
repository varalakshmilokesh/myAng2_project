import { Pipe , PipeTransform} from '@angular/core';
import {Iorder} from './order';

@Pipe ({

    name: 'orderFilter'
})

export class OrderFilterPipe implements PipeTransform{
    transform(value:Iorder[] ,filterBy:string):Iorder[]{
      filterBy=filterBy ? filterBy.toLocaleLowerCase():null;
      return filterBy ? value.filter((device:Iorder)=>
      device.DeviceName.toLocaleLowerCase().indexOf(filterBy)!==-1):value 
    }

}