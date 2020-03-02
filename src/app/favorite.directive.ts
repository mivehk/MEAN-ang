import {Directive ,HostBinding} from '@angular/core';

@Directive({
    selector: '[cuFavorite]'
})

export class FavoriteDirective {
    @HostBinding('class.os-favorite') isFavorite =true;
}