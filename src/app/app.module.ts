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
import { MainContentComponent } from './components/main-content/main-content.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    UsComponent,
    ContactComponent,
    OurServicesComponent,
    FooterComponent,
    MainContentComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
