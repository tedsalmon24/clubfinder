import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { MatchComponent } from './match/match.component';
import { ChatComponent } from './chat/chat.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { MatchedComponent } from './matched/matched.component';
import { SettingsComponent } from './settings/settings.component';
import { eventPostComponent } from './eventPost/eventPost.component';
import { EventManager } from '@angular/platform-browser';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'organizations', component: OrganizationsComponent},
  {path: 'match', component: MatchComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'matched', component: MatchedComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'eventPost', component: eventPostComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
