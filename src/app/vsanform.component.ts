import { Component, Input} from '@angular/core'

@Component({
    selector: 'vsan-form1',
    templateUrl: './vsanform.component.html',
    styleUrls:['./vsanform.component.css']
    
})

export class VsanformComponent{
    
   /* onSubmit(){
        console.log('test');*/
        firstvsanItem={
            id:1,
            numNodes:'12' ,
            numCapdisks:'4' ,
            numDiskgroups:'2' ,
            ssdSize:'800' ,
            FTM:'PFTT=1'
        };
    }

