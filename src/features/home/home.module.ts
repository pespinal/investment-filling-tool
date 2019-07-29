import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
/* import { SharedModule } from '@shared/shared.module';
import { TextMaskModule } from 'angular2-text-mask';
import { InvokerService, LoggerModule } from 'cob-infrastructure';
import { HttpServiceModule } from 'cob-infrastructure';
import { PersonalDataComponent } from './components/personal-data/personal-data.component';
import { PersonalDataHandler } from './handler/personal-data.handler'; */
import { HomeRoutingModule } from './home-routing.module';
import { LandingComponent } from './components/landing/landing.component';

@NgModule({
  imports: [
    CommonModule,
    /* SharedModule, */
    ReactiveFormsModule,
    HomeRoutingModule,
    /* HttpServiceModule,
    LoggerModule,
    TextMaskModule, */
  ],
  declarations: [LandingComponent],
  providers: [/* InvokerService, PersonalDataHandler */],
})
export class HomeModule {}
