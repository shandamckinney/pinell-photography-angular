import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleriesComponent } from './pages/galleries/galleries.component';
import { HomeComponent } from './pages/home/home.component';
import { AliAndJustinComponent } from './pages/individual-galleries/ali-and-justin/ali-and-justin.component';
import { HunterAndMeganComponent } from './pages/individual-galleries/hunter-and-megan/hunter-and-megan.component';
import { NickAndChadComponent } from './pages/individual-galleries/nick-and-chad/nick-and-chad.component';
import { SaraComponent } from './pages/individual-galleries/sara/sara.component';
import { PricingComponent } from './pages/pricing/pricing.component';

const routes: Routes = [
  { path: 'galleries', component: GalleriesComponent},
  { path: 'NickAndChad', component: NickAndChadComponent},
  { path: 'AliAndJustin', component: AliAndJustinComponent},
  { path: 'Sara', component: SaraComponent},
  { path: 'HunterAndMegan', component: HunterAndMeganComponent},
  { path: 'galleries', component: GalleriesComponent},
  { path: 'galleries', component: GalleriesComponent},
  { path: 'galleries', component: GalleriesComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'pricing', component: PricingComponent},
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
