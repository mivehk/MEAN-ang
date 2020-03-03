import { Component } from '@angular/core'

@Component({
    selector: 'vsan-form-1',
    templateUrl: './vsanform.component.html',
    styleUrls:['./vsanform.component.css']
    
})

export class VsanformComponent{
     onSubmit(vsanItem){
             console.log(vsanItem);
     }         
}
    
   