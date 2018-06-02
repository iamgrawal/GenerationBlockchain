import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AskComponent } from './ask/ask.component';
import { QuestionsComponent } from './questions/questions.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

import { AppRoutingModule } from './app-routing.module';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AskComponent,
    QuestionsComponent,
    LeaderboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [ValidateService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
