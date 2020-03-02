import {Directive ,HostBinding, Input} from '@angular/core';

@Directive({
    selector: '[cuFavorite]'
})

export class FavoriteDirective {
    @HostBinding('class.is-favorite') isFavorite =true;
    @Input() set cuFavorite(value: boolean){
        this.isFavorite = value;
    }
}