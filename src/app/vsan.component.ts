import { Component, Input } from '@angular/core'

@Component({
    selector: 'vsan-form',
    templateUrl: './vsan.component.html',
    styleUrls:['./vsan.component.css']
})

export class VsanComponent{ 
    @Input() vsanItem;
   
}