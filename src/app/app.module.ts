import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FoobarComponent } from './foobar/foobar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserComponent } from './user/user.component';
import { SearchComponent } from './search/search.component';
import { SentComponent } from './sent/sent.component';
import { MainComponent } from './main/main.component';
import { ContentComponent } from './content/content.component';
import { MessageComponent } from './message/message.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import {LoginComponent} from './login/login.component';
import {ButtonsModule, MDBBootstrapModule, WavesModule} from 'angular-bootstrap-md';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    FoobarComponent,
    SidebarComponent,
    UserComponent,
    SearchComponent,
    SentComponent,
    MainComponent,
    ContentComponent,
    MessageComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonsModule,
    WavesModule,
    MDBBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
