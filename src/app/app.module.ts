import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { InputComponent } from './root/input/input.component';
import { SpendingsComponent } from './root/spendings/spendings.component';
import { TotalComponent } from './root/total/total.component';
import { TypesComponent } from './root/types/types.component';
import { Store } from './app.store';
// import { AppRoutingModule, routedComponents } from './app-routing.module';
// import { AclModule } from './@acl/acl.module';
// import { AuthResolve } from './auth/auth.resolve';

const COMPONENTS = [
  AppComponent, InputComponent, SpendingsComponent, TypesComponent, TotalComponent
];

const STORES = [Store];

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    // IdlePreloadModule.forRoot(),
    // NgbModule.forRoot(),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    // StoreModule.forRoot(),
    // AclModule.forRoot(),
    // AppRoutingModule,
  ],
  declarations: [...COMPONENTS],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }, ...STORES],
})
export class AppModule {}

