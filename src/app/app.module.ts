import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Components
import { PendingComponent } from '../pages/pending/pending.component';
import { DoneComponent } from '../pages/done/done.component';
import { AddComponent } from '../pages/add/add.component';
import { ListsComponent } from '../components/lists.component';

//Services
import { WishesService } from '../app/services/wishes.service';

//Pipes
import { FilterCompletedPipe } from '../pipes/filter-completed/filter-completed';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendingComponent,
    DoneComponent,
    AddComponent,
    ListsComponent,
    FilterCompletedPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendingComponent,
    DoneComponent,
    AddComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WishesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
