import { Injectable} from '@angular/core'

@Injectable({
    providedIn: 'root'
})

export class VsanService {
    vsanItems=[
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

    ]
     
    get(){
        return this.vsanItems;
    }
    add(vsanItem){
        this.vsanItems.push(vsanItem)
    }
    delete(vsanItem){
        const index=this.vsanItems.indexOf(vsanItem);
        if (index >=0){
            this.vsanItems.splice(index , 1);
        }

    }
}