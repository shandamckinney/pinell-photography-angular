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
import { TownsleyweddingComponent } from './pages/individual-galleries/townsleywedding/townsleywedding.component';
import { TabythaComponent } from './pages/individual-galleries/tabytha/tabytha.component';
import { DanielleComponent } from './pages/individual-galleries/danielle/danielle.component';
import { BradleyComponent } from './pages/individual-galleries/bradley/bradley.component';

const routes: Routes = [
  { path: 'galleries', component: GalleriesComponent, data: { title: 'Pinell Photography - Texas Photoshoots' }},
  { path: 'townsleywedding', component: TownsleyweddingComponent, data: { title: 'Pinell Photography - Houston Wedding' }},
  { path: 'tabytha', component: TabythaComponent, data: { title: 'Pinell Photography - Houston Portraits' }},
  { path: 'danielle', component: DanielleComponent, data: { title: 'Pinell Photography - Houston Senior Portraits' }},
  { path: 'bradley', component: BradleyComponent, data: { title: 'Pinell Photography - Houston Affordable Headshots' }},
  { path: 'NickAndChad', component: NickAndChadComponent, data: { title: 'Pinell Photography - LGBTQ Texas Wedding' }},
  { path: 'AliAndJustin', component: AliAndJustinComponent, data: { title: 'Pinell Photography - White Sands Photoshoot' }},
  { path: 'TaraAndClancey', component: TaraAndClanceyComponent, data: { title: 'Pinell Photography - Houston Lifestyle Photographer' }},
  { path: 'Sara', component: SaraComponent, data: { title: 'Pinell Photography - Houston Portrait Photoshoot' }},
  { path: 'Becca', component: BeccaComponent, data: { title: 'Pinell Photography - Houston Photoshoot' }},
  { path: 'Alexandra', component: AlexandraComponent, data: { title: 'Pinell Photography - Houston Maternity Photoshoot' }},
  { path: 'Ashley', component: AshelyComponent, data: { title: 'Pinell Photography - Houston Photographer Headshot' }},
  { path: 'HayesFamily', component: HayesFamilyComponent, data: { title: 'Pinell Photography - Houston Photography Familiy' }},
  { path: 'HunterAndMegan', component: HunterAndMeganComponent, data: { title: 'Pinell Photography - Houston Engagement Photoshoot' }},
  { path: 'galleries', component: GalleriesComponent, data: { title: 'Pinell Photography - Galleries' }},
  { path: 'about', component: AboutComponent, data: { title: 'Pinell Photography - About - Affordable Houston Photography' }},
  { path: 'contact', component: ContactComponent, data: { title: 'Pinell Photography - Contact - Affordable Houston Photography' }},
  { path: 'pricing', component: PricingComponent, data: { title: 'Pinell Photography - Pricing - Houston Photographer Pricing' }},
  { path: '', component: HomeComponent, data: { title: 'Pinell Photography - Houston Lifestyle Photographer' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
