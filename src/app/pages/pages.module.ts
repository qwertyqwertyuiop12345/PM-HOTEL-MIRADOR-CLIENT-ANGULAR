import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { RoomComponent } from './room/room.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from '../app-routing.module';
import { PipesModule } from '../pipes/pipes.module';

import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReservationComponent } from './reservation/reservation.component';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { GalleryComponent } from './gallery/gallery.component';




@NgModule({
  declarations: [
    HomeComponent,
    RoomComponent,
    ContactUsComponent,
    AboutComponent,
    AdminComponent,
    LoginAdminComponent,
    ReservationComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    AppRoutingModule,
    PipesModule,
    MatIconModule,
    MatCheckboxModule,
    MatCardModule,
    MatDatepickerModule,
    ReactiveFormsModule ,
  ],
  exports: [
    HomeComponent,
    RoomComponent,
    ContactUsComponent,
    AboutComponent,
    AdminComponent,
    LoginAdminComponent
  ]
})
export class PagesModule { }
