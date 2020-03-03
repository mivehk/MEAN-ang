import {Directive ,HostBinding, Input, HostListener} from '@angular/core';

@Directive({
    selector: '[cuFavorite]'
})
//directive change host element properties via host binding
//directive can respond to host event changes via host listeners
export class FavoriteDirective {

    /*inside parenteses we select css class name which will be added to element once value of 
    bolean isFavorite is true which also as a css selector it changes color of  */
    @HostBinding('class.is-fav') isFavorite =true;
    @HostBinding('class.is-fav-hovering') hovering = false;
   //for events mouseenter and mouseleave we define reponses which toggle hoveringvalue
    @HostListener('mouseenter') onMouseEnter(){
        this.hovering=true
    }
    @HostListener('mouseleave') onMouseLeave(){
        this.hovering= false
    }
    @Input() set cuFavorite(value: boolean){
        this.isFavorite = value;
    }
}