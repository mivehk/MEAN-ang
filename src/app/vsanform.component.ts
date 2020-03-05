import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { VsanService} from './vsan.service'

@Component({
    selector: 'vsan-form-1',
    templateUrl: './vsanform.component.html',
    styleUrls:['./vsanform.component.css']
    
})

export class VsanformComponent {
     form: FormGroup;

     constructor (private formBuilder: FormBuilder,
     private vsanService: VsanService){}

     ngOnInit(){
         this.form = this.formBuilder.group({
             cuName: this.formBuilder.control('',Validators.compose([
                 Validators.required
             ])),
             numNodes: this.formBuilder.control(),
             numCapdisks:this.formBuilder.control(),
             numDiskgroups: this.formBuilder.control(),
             ssdSize: this.formBuilder.control('',this.ssdSizeValidator),
             FTM:this.formBuilder.control(),
             isFavorite: this.formBuilder.control()
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
             this.vsanService.add(vsanItem);
     }         
}
    
   