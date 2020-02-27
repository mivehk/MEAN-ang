import { Component } from '@angular/core';


@Component({
    selector: 'vsan-root',
    templateUrl: './app.component.html',
    styleUrls:['./app.component.css']
})


export class AppComponent{
    firstvsanItem={
        id:1,
        numNodes:'12' ,
        numCapdisks:'4' ,
        numDiskgroups:'2' ,
        ssdSize:'800' ,
        FTM:'PFTT=1'
    };
} 