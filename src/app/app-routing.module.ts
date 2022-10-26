import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { MatchComponent } from './match/match.component';
import { ChatComponent } from './chat/chat.component';
import { SigninComponent } from './signin/signin.component';
const routes: Routes = [
  {path: '', component: ProfileComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'organizations', component: OrganizationsComponent},
  {path: 'match', component: MatchComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'signin', component: SigninComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
