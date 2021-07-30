import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem, MessageService} from 'primeng/api';
import {FileUploadModule} from 'primeng/fileupload';
import {CalendarModule} from 'primeng/calendar';
import { CommonModule }      from '@angular/common';
import {GMapModule} from 'primeng/gmap';
import {ButtonModule} from 'primeng/button';
import { CompareValidatorModule } from 'angular-compare-validator';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { ExplorenerbyComponent } from './page/explorenerby/explorenerby.component';
import { LiveAnyWhereComponent } from './page/live-any-where/live-any-where.component';
import { DiscoverThingsComponent } from './page/discover-things/discover-things.component';
import { UserDetailsComponent } from './User/user-details/user-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { HostingComponent } from './hosting/hosting.component';
import { HousesComponent } from './testing/houses/houses/houses.component';
import { BookingComponent } from './testing/booking/booking/booking.component';
import { AllhousesComponent } from './testing/allhouses/allhouses.component';
import { DetailsComponent } from './testing/details/details.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {PasswordModule} from 'primeng/password';
import { PersonFeedbackComponent } from './person-feedback/person-feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ExplorenerbyComponent,
    LiveAnyWhereComponent,
    DiscoverThingsComponent,
    UserDetailsComponent,
    HostingComponent,
    HousesComponent,
    BookingComponent,
    AllhousesComponent,
    DetailsComponent,
    PersonFeedbackComponent,

  ],
  imports: [AccordionModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    BrowserAnimationsModule,
    FileUploadModule,
    CarouselModule,
    CommonModule,
    GMapModule,
    ButtonModule,
    PasswordModule,
    CompareValidatorModule

  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
