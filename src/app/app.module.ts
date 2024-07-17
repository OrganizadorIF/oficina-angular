import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharListComponent } from './src/app/components/char-list/char-list.component';
import { ToastrModule } from 'ngx-toastr';
import { CharFormComponent } from './src/app/components/char-form/char-form.component';

const routes: Route[] = [
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: 'list', component: CharListComponent},
  {path: 'form', component: CharFormComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CharListComponent,
    CharFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot(),
    FormsModule
  ],
  providers: [
    // provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
