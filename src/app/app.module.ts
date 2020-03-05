import { NgModule } from '@angular/core'
import {AppComponent} from './app.component'
import {BrowserModule} from '@angular/platform-browser'
import {ReactiveFormsModule} from '@angular/forms'
import {VsanformComponent} from './vsanform.component'
import {VsanComponent} from './vsan.component'
import {FavoriteDirective} from './favorite.directive'
import {VsanListComponent} from './vsanlist.component'
//import {vsanService} from './vsan.service'

@NgModule({
    imports:[
        BrowserModule,
        ReactiveFormsModule
    ],
    declarations:[
        AppComponent,
        VsanComponent,
        VsanformComponent,
        FavoriteDirective,
        VsanListComponent
    ],
    bootstrap:[
        AppComponent
    ],
    providers:[
        //vsanService
    ]
})

export class AppModule{}