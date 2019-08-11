import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/shared/login/login.component';
import {GroupChatComponent} from './group-chat/group-chat.component';
import {AuthGuard} from './services/auth.guard';
import {WellcomeComponent} from './components/shared/wellcome/wellcome.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  {path: '', component: WellcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LoginComponent},
  {path: 'chat', component: GroupChatComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
