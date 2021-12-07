import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleriesComponent } from './pages/galleries/galleries.component';
import { HomeComponent } from './pages/home/home.component';
import { AlexandraComponent } from './pages/individual-galleries/alexandra/alexandra.component';
import { AliAndJustinComponent } from './pages/individual-galleries/ali-and-justin/ali-and-justin.component';
import { BeccaComponent } from './pages/individual-galleries/becca/becca.component';
import { HunterAndMeganComponent } from './pages/individual-galleries/hunter-and-megan/hunter-and-megan.component';
import { NickAndChadComponent } from './pages/individual-galleries/nick-and-chad/nick-and-chad.component';
import { SaraComponent } from './pages/individual-galleries/sara/sara.component';
import { AshelyComponent } from './pages/individual-galleries/ashely/ashely.component';
import { HayesFamilyComponent } from './pages/individual-galleries/hayes-family/hayes-family.component';
import { TaraAndClanceyComponent } from './pages/individual-galleries/tara-and-clancey/tara-and-clancey.component';
import { PricingComponent } from './pages/pricing/pricing.component';

const routes: Routes = [
  { path: 'galleries', component: GalleriesComponent},
  { path: 'NickAndChad', component: NickAndChadComponent},
  { path: 'AliAndJustin', component: AliAndJustinComponent},
  { path: 'TaraAndClancey', component: TaraAndClanceyComponent},
  { path: 'Sara', component: SaraComponent},
  { path: 'Becca', component: BeccaComponent},
  { path: 'Alexandra', component: AlexandraComponent},
  { path: 'Ashley', component: AshelyComponent},
  { path: 'HayesFamily', component: HayesFamilyComponent},
  { path: 'HunterAndMegan', component: HunterAndMeganComponent},
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
