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
import { SettingsComponent } from './settings/settings.component';
import { Matched2Component } from './matched2/matched2.component';
import { Matched3Component } from './matched3/matched3.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    SettingsComponent,
    Matched2Component,
    Matched3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
