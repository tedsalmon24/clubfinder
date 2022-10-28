import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { MatchComponent } from './match/match.component';
import { ChatComponent } from './chat/chat.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { MatchedComponent } from './matched/matched.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    OrganizationsComponent,
    MatchComponent,
    ChatComponent,
    SigninComponent,
    HomeComponent,
    MatchedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
