import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
/* import { TranslateService } from '@ngx-translate/core';
import { RoutesPaths } from '@shared/domain/routes-paths';
import { CommonValidators } from '@shared/validators/common.validator';
import { SessionStorageHandler } from 'cob-infrastructure';
import { SingleFormComponent } from 'cob-ui-components'; */
/* import { PersonalDataHandler } from '../../handler/login.handler'; */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public errorMessages: any = {};

  failMessageCode = {
    RECHAZADO_RECONOCER: 'FAILEDPROCESS.REJECTED_RECOGNIZE',
    ES_CLIENTE: 'FAILEDPROCESS.IS_CLIENT',
    RECHAZADO_EMAILAGE: 'FAILEDPROCESS.REJECTED_EMAILAGE',
    ERROR_DESCONOCIDO: 'FAILEDPROCESS.GENERIC_ERROR',
    ERROR: 'FAILEDPROCESS.GENERIC_ERROR',
  };

  constructor(
    private formBuilder: FormBuilder,
    /* private componentHandler: PersonalDataHandler, */
    public router: Router,
    /* public form: FormGroup, */
    /* private sessionStorageHandler: SessionStorageHandler,
    private translateService: TranslateService */
  ) {
    /* super(router);
    this.translateService.setDefaultLang('es');*/
    //this.createForm();
  }

  public goHome() {
    console.log('aqui');
    this.router.navigate(['/home']);
  }

 /* ngOnInit() { } */

  /* createForm() {
    this.form = this.formBuilder.group({
      personalInfoDocumentNumber: ['', {
        updateOn: 'blur',
        validators: []
      }],
      personalInfoTelephone: ['', Validators.required],
      personalInfoEmail: [
        '',
        [Validators.required, Validators.maxLength(50), Validators.email],
      ],
    });
  } */
/*
  onSubmit() {
    if (this.form.valid) {
      this.errorMessage = null;
      this.requestSent = true;
      this.componentHandler
        .sendToValidate(this.form.value)
        .then((response) => {
          this.handleSuccess(response);
        })
        .catch((error) => {
          this.handleFailureCallback(
            error,
            this.onFailedSubmit.bind(this),
            RoutesPaths.UNAUTHORIZED
          );
        });
    }
  }

  private handleSuccess(data) {
    if (data.code === 'ok') {
      this.sessionStorageHandler.setValue('person', JSON.stringify(this.form.value));
      this.router.navigate([RoutesPaths.CHECKING_EVALUATE]);
    } else if (data.code === 'fail' || data.code === 'error') {
      this.sessionStorageHandler.setValue('failedProcessCode', this.getFailMessageCode(data.message));
      this.router.navigate([RoutesPaths.FAILED_PROCESS]);
    } else {
      this.requestSent = false;
      this.errorMessage = data.message;
    }
  }

  private getFailMessageCode(message) {
    const code = message in this.failMessageCode ? message : 'ERROR';
    return this.failMessageCode[code];
  }

  private onFailedSubmit(error) {
    this.errorMessage = 'Tu información no pudo ser enviada, por favor inténtalo nuevamente.';
  } */
}
