import {Component , OnChanges,Input,Output,EventEmitter} from '@angular/core';

@Component({

    selector:'dev-star',
    templateUrl:'app/makeStars/star.component.html',
    styleUrls:['app/makeStars/star.component.css']

})
export class StarComponent implements OnChanges{
   @Input() rating: number;
    starWidth: number;

    @Output() ratingClicked:EventEmitter<string>=new EventEmitter<string>();

    ngOnChanges(): void{
        this.starWidth = this.rating*86/5;
    }

    onClick(): void{
        this.ratingClicked.emit(`rating is ${this.rating}`);
    }
    
}
