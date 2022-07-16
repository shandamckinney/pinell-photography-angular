import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { GalleriesComponent } from './pages/galleries/galleries.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from './service/contact.service';
import { HttpClientModule } from '@angular/common/http';
import { AliAndJustinComponent } from './pages/individual-galleries/ali-and-justin/ali-and-justin.component';
import { NickAndChadComponent } from './pages/individual-galleries/nick-and-chad/nick-and-chad.component';
import { HunterAndMeganComponent } from './pages/individual-galleries/hunter-and-megan/hunter-and-megan.component';
import { SaraComponent } from './pages/individual-galleries/sara/sara.component';
import { BeccaComponent } from './pages/individual-galleries/becca/becca.component';
import { AlexandraComponent } from './pages/individual-galleries/alexandra/alexandra.component';
import { TaraAndClanceyComponent } from './pages/individual-galleries/tara-and-clancey/tara-and-clancey.component';
import { AshelyComponent } from './pages/individual-galleries/ashely/ashely.component';
import { HayesFamilyComponent } from './pages/individual-galleries/hayes-family/hayes-family.component';
import { SwiperModule } from 'swiper/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { TownsleyweddingComponent } from './pages/individual-galleries/townsleywedding/townsleywedding.component';
import { TabythaComponent } from './pages/individual-galleries/tabytha/tabytha.component';
import { DanielleComponent } from './pages/individual-galleries/danielle/danielle.component';
import { BradleyComponent } from './pages/individual-galleries/bradley/bradley.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    PricingComponent,
    GalleriesComponent,
    HomeComponent,
    AliAndJustinComponent,
    NickAndChadComponent,
    HunterAndMeganComponent,
    SaraComponent,
    BeccaComponent,
    AlexandraComponent,
    TaraAndClanceyComponent,
    AshelyComponent,
    HayesFamilyComponent,
    TownsleyweddingComponent,
    TabythaComponent,
    DanielleComponent,
    BradleyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SwiperModule,
    BrowserAnimationsModule ,
    SlickCarouselModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
