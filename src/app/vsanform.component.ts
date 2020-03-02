import { Component, Input, Output} from '@angular/core'

@Component({
    selector: 'vsan-form1',
    templateUrl: './vsanform.component.html',
    styleUrls:['./vsanform.component.css']
    
})

export class VsanformComponent{
    
   /* onSubmit(){
        console.log('test');*/
        /*firstvsanItem={
            id:1,
            numNodes:'12' ,
            numCapdisks:'4' ,
            numDiskgroups:'2' ,
            ssdSize:'800' ,
            FTM:'PFTT=1'
        };*/
        vsanItems=[
            {
                id:1,
                cuName:'CS-00',
                numNodes:'12' ,
                numCapdisks:'4' ,
                numDiskgroups:'2' ,
                ssdSize:'800' ,
                FTM:'PFTT=1'
            },
            {
                id:2,
                cuName:'CS01',
                numNodes:'8' ,
                numCapdisks:'4' ,
                numDiskgroups:'2' ,
                ssdSize:'1200' ,
                FTM:'PFTT=2'
            },
            {
                id:3,
                cuName:'CS03',
                numNodes:'12' ,
                numCapdisks:'4' ,
                numDiskgroups:'2' ,
                ssdSize:'2500' ,
                FTM:'PFTT=3'
            }

        ]
        onVsanItemDelete(vsanItem){

        }
    }

