import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { CostaComponent } from './costa/costa.component';
import { SierraComponent } from './sierra/sierra.component';
import { AmazoniaComponent } from './amazonia/amazonia.component';
import { IslasComponent } from './islas/islas.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    HomeComponent,
    CostaComponent,
    SierraComponent,
    AmazoniaComponent,
    IslasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
