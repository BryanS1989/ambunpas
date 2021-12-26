import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainContentComponent } from "./components/main-content/main-content.component";
import { UsComponent } from "./components/us/us.component";
import { OurServicesComponent } from "./components/our-services/our-services.component";
import { ContactComponent } from "./components/contact/contact.component";


const routes: Routes = [
  { path: 'us', component: UsComponent },
  { path: 'services', component: OurServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: MainContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
