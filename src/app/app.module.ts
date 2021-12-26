import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// ANGULAR MATERIAL COMPONENTS
import {MatTabsModule} from '@angular/material/tabs';
import { UsComponent } from './components/us/us.component';
import { ContactComponent } from './components/contact/contact.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    UsComponent,
    ContactComponent,
    OurServicesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
