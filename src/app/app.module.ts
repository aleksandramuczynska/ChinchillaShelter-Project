import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainPageModule } from './main-page/main-page.module';
import { FactsSiteComponent } from './facts-site/facts-site.component';
import { FactsSiteModule } from './facts-site/facts-site.module';


@NgModule({
  declarations: [	AppComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainPageModule,
    FactsSiteModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
