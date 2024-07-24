import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CharListComponent } from './src/app/components/char-list/char-list.component';
import { CharFormComponent } from './src/app/components/char-form/char-form.component';
import { InputMaskModule } from 'primeng/inputmask';
import { ToastrModule } from 'ngx-toastr';

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
    FormsModule,
    InputMaskModule
  ],
  providers: [
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
