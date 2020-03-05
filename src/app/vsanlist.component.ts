import { Component , OnInit } from '@angular/core'
import {VsanService} from './vsan.service'

@Component({
    selector: 'vsan-list-2',
    templateUrl: './vsanlist.component.html',
    styleUrls: ['./vsanlist.component.css']
})

export class VsanListComponent implements OnInit{
  vsanItems /*=[
            {
                id:1,
                cuName:'cs-00',
                numNodes:'12' ,
                numCapdisks:'4' ,
                numDiskgroups:'2' ,
                ssdSize:'800' ,
                FTM:'PFTT=1',
                isFavorite: false
            },
            {
                id:2,
                cuName:'ev01',
                numNodes:'8' ,
                numCapdisks:'4' ,
                numDiskgroups:'2' ,
                ssdSize:'1200' ,
                FTM:'PFTT=2',
                isFavorite: true
            },
            {
                id:3,
                cuName:'mt03',
                numNodes:'12' ,
                numCapdisks:'4' ,
                numDiskgroups:'2' ,
                ssdSize:'2500' ,
                FTM:'PFTT=3',
                isFavorite: true
            }

        ]  */

        constructor(private vsanService: VsanService){}
        ngOnInit(){
            this.vsanItems =this.vsanService.get()
        }
        onVsanItemDelete(vsanItem){
            this.vsanService.delete(vsanItem)
        }

}


        /*firstvsanItem={
            id:1,
            numNodes:'12' ,
            numCapdisks:'4' ,
            numDiskgroups:'2' ,
            ssdSize:'800' ,
            FTM:'PFTT=1'
        };*/
     
    

