import { Component, Input ,Output , EventEmitter } from '@angular/core'

@Component({
    selector: 'vsan-form-3',
    templateUrl: './vsan.component.html',
    styleUrls:['./vsan.component.css']
})

export class VsanComponent{ 
    @Input() vsanItem;
    @Output() delete = new EventEmitter();

    onDelete(){
        console.log('deleted');
        this.delete.emit(this.vsanItem);
    }
}