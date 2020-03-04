import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'


@Component({
    selector: 'vsan-form-1',
    templateUrl: './vsanform.component.html',
    styleUrls:['./vsanform.component.css']
    
})

export class VsanformComponent{
     form: FormGroup;
     ngOnInit(){
         this.form =new FormGroup({
             cuName: new FormControl('',Validators.compose([
                 Validators.required
             ])),
             numNodes: new FormControl(),
             numCapdisks:new FormControl(),
             numDiskgroups: new FormControl(),
             ssdSize: new FormControl('',this.ssdSizeValidator),
             FTM:new FormControl(),
             isFavorite: new FormControl()
         })
     }   
     ssdSizeValidator(control: FormControl){
         
         const ssdsize= parseInt(control.value , 10)
    
         const minSSD = 500;
         const maxSSD = 62000;
         if ( ssdsize >= minSSD && ssdsize <= maxSSD){
             return null
         } else{
             return { ssdsize: true}
         }

     } 
     onSubmit(vsanItem){
             console.log(vsanItem);
     }         
}
    
   