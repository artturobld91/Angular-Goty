import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


import { NavbarComponent } from './navbar/navbar.component';
import { GraphBarComponent } from './graph-bar/graph-bar.component';
import { environment } from '../../environments/environment';


@NgModule({
  declarations: [
    NavbarComponent,
    GraphBarComponent
  ],
  exports: [
    NavbarComponent,
    GraphBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ChartsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ]
})
export class ComponentsModule { }
