import { Component} from '@angular/core'

@Component({
    selector: 'vsan-form',
    templateUrl: './vsanform.component.html',
    styleUrls:['./vsanform.component.css']
    
})

export class VsanformComponent{
    onSubmit(){
        console.log('test');
    }
}
