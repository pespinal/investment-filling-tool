import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

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
    private angularFireAuth: AngularFireAuth
    /* public form: FormGroup, */
    /* private sessionStorageHandler: SessionStorageHandler,
    private translateService: TranslateService */
  ) {
    /* super(router);
    this.translateService.setDefaultLang('es');*/
    //this.createForm();
  }

  public goHome() {
    this.router.navigate(['/home']);
  }

  public signInWithGoogle() {
    this.angularFireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
    .then((user) => {
      console.log(user);
      this.goHome();
    })    
    .catch(console.log)
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
