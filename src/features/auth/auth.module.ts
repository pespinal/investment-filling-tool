import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
/* import { SharedModule } from '@shared/shared.module';
import { TextMaskModule } from 'angular2-text-mask';
import { InvokerService, LoggerModule } from 'cob-infrastructure';
import { HttpServiceModule } from 'cob-infrastructure';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { PersonalDataHandler } from './handler/personal-data.handler'; */
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    /* SharedModule, */
    ReactiveFormsModule,
    AuthRoutingModule,
    /* HttpServiceModule,
    LoggerModule,
    TextMaskModule, */
  ],
  declarations: [LoginComponent],
  providers: [/* InvokerService, PersonalDataHandler */],
})
export class AuthModule {}
