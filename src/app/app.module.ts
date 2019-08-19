import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/shared/topbar/topbar.component';
import { FoobarComponent } from './components/shared/foobar/foobar.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { UserComponent } from './components/feature/user/user.component';
import { SearchComponent } from './components/shared/search/search.component';
import { SentComponent } from './components/feature/sent/sent.component';
import { MainComponent } from './components/feature/main/main.component';
import { ContentComponent } from './components/feature/content/content.component';
import { MessageComponent } from './components/feature/message/message.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './components/shared/header/header.component';
import {LoginComponent} from './components/shared/login/login.component';
import {ButtonsModule, MDBBootstrapModule, WavesModule} from 'angular-bootstrap-md';
import { GroupChatComponent } from './group-chat/group-chat.component';
import { WellcomeComponent } from './components/shared/wellcome/wellcome.component';
import { ReceiverComponent } from './components/feature/receiver/receiver.component';
import {AuthService} from './services/auth.service';

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
    LoginComponent,
    GroupChatComponent,
    WellcomeComponent,
    ReceiverComponent
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
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
