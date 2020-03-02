import { NgModule } from '@angular/core'
import {AppComponent} from './app.component'
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'
import {VsanformComponent} from './vsanform.component'
import {VsanComponent} from './vsan.component'
import {FavoriteDirective} from './favorite.directive'


@NgModule({
    imports:[
        BrowserModule,
        FormsModule
    ],
    declarations:[
        AppComponent,
        VsanComponent,
        VsanformComponent
    ],
    bootstrap:[
        AppComponent
    ]
})

export class AppModule{}