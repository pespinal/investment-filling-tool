import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
/* import { CellphoneFormatterDirective } from '@shared/directives/cellphone.directive';
import { LoginEmailFormatterDirective } from '@shared/directives/login-email.directive';
import { NationalIdCardFormatterDirective } from '@shared/directives/national-id-card.directive';
import { LoginEmailPipe } from '@shared/pipes/login-email.pipe';
import { NationalIdCardPipe } from '@shared/pipes/national-id-card.pipe';
import { StorageHandlerModule } from 'cob-infrastructure';
import { LoginAvatarComponent } from './components/login-avatar/login-avatar.component';
import { ModalLoaderComponent } from './components/modal-loader/modal-loader.component';
import { CellphonePipe } from './pipes/cellphone.pipe';
 */
@NgModule({
  imports: [
    CommonModule,
    /* StorageHandlerModule */
  ],
  declarations: [
    HeaderComponent,
    /*CellphoneFormatterDirective,
    NationalIdCardFormatterDirective,
    LoginEmailFormatterDirective,
    CellphonePipe,
    NationalIdCardPipe,
    ModalLoaderComponent,
    LoginAvatarComponent,
    LoginEmailPipe */
  ],
  exports: [
    HeaderComponent,
    /*CellphoneFormatterDirective,
    NationalIdCardFormatterDirective,
    ModalLoaderComponent,
    LoginAvatarComponent,
    LoginEmailFormatterDirective */
  ],
  providers: [
    /* CellphonePipe,
    NationalIdCardPipe,
    LoginEmailPipe */
  ]
})
export class SharedModule { }
