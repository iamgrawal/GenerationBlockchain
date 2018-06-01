import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AskComponent } from './ask/ask.component';

const routes: Routes = [
  {
    path: '',
    component: AskComponent
  },
  {
    path: 'ask',
    component: AskComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
