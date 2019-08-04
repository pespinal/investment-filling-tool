/* import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { PersonalDataHandler } from '../../handler/login.handler';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { HttpServiceModule, CONFIG_APP, CONFIG_CIPHER, CONFIG_COMMON, CONFIG_TOKEN, InvokerService, SessionStorageHandler, CONFIG_LOGGER } from 'cob-infrastructure';
import { LoggerModule } from 'cob-infrastructure';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TextMaskModule } from 'angular2-text-mask';
import { appVersion } from 'src/app/app.version';
import { Router } from '@angular/router';
import { SessionStorageHandlerMock } from '@mocks/session-storage-handler-mock';
import { RoutesPaths } from '@shared/domain/routes-paths';
import { FailedProcessComponent } from 'src/app/features/failed-process/components/failed-process/failed-process.component';
import { LoaderComponent } from 'src/app/features/loader-evaluate/components/loader/loader.component';
import { LoaderEvaluateModule } from 'src/app/features/loader-evaluate/loader-evaluate.module';
import { FailedProcessModule } from 'src/app/features/failed-process/failed-process.module';
import { DataService } from '@core/services/data/data.service';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/personal-data/', '.json?v=' + appVersion);
}


describe('PersonalDataComponent', () => {
  let comp: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule,
        RouterTestingModule.withRoutes([
          { path: RoutesPaths.CHECKING_EVALUATE, component: LoaderComponent },
          { path: RoutesPaths.FAILED_PROCESS, component: FailedProcessComponent }
        ]),
        LoaderEvaluateModule,
        FailedProcessModule,
        ReactiveFormsModule,
        HttpServiceModule,
        HttpClientModule,
        LoggerModule,
        TextMaskModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [HttpClient],
          },
          isolate: true
        }),
      ],
      declarations: [LoginComponent],
      providers: [
        InvokerService,
        PersonalDataHandler,
        { provide: SessionStorageHandler, useClass: SessionStorageHandlerMock },
        { provide: CONFIG_APP, useValue: {} },
        { provide: CONFIG_CIPHER, useValue: {} },
        { provide: CONFIG_TOKEN, useValue: {} },
        { provide: CONFIG_COMMON, useValue: {} },
        { provide: CONFIG_LOGGER, useValue: {} }
      ]
    })
      .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  const defaultForm = {
    personalInfoDocumentNumber: '',
    personalInfoTelephone: '',
    personalInfoEmail: ''
  }

  function configureValidForm() {
    setValue('personalInfoDocumentNumber', '111111111');
    setValue('personalInfoEmail', 'a@jb.com');
    setValue('personalInfoTelephone', '999999999');
    expect(comp.form.valid).toBe(true);
  }

  function getValue(control) {
    return comp.form.get(control).value;
  }

  function setValue(control, value) {
    comp.form.get(control).setValue(value);
  }

  it('should create with initial form invalid', () => {
    expect(comp).toBeTruthy();
    expect(comp.form).toBeTruthy();
    expect(comp.form.value).toEqual(defaultForm)
    expect(comp.form.valid).toBe(false);
    comp.onSubmit();
    expect(comp.requestSent).toBe(false);
    expect(comp.formControls).toBeTruthy();
  });

  it('should to navigate do evaluate/checkingEvaluate when submit form and service responds ok', fakeAsync(() => {
    const componentHandler: PersonalDataHandler = TestBed.get(PersonalDataHandler);
    jest.spyOn(componentHandler, 'sendToValidate').mockImplementation(() => {
      return Promise.resolve({
        code: 'ok'
      })
    });
    const router: Router = TestBed.get(Router);
    const spyNavigate = jest.spyOn(router, 'navigate');

    configureValidForm();

    comp.onSubmit();
    tick(1);
    expect(spyNavigate).toHaveBeenCalledWith(['evaluate/checkingEvaluate']);
  }));

  it('should to navigate do failed-process when service responds error', fakeAsync(() => {
    const componentHandler: PersonalDataHandler = TestBed.get(PersonalDataHandler);
    jest.spyOn(componentHandler, 'sendToValidate').mockImplementation(() => {
      return Promise.resolve({
        code: 'error'
      })
    });
    const router: Router = TestBed.get(Router);
    const spyNavigate = jest.spyOn(router, 'navigate');

    configureValidForm();

    comp.onSubmit();
    tick(1);
    expect(spyNavigate).toHaveBeenCalledWith(['failed-process']);
  }));

  it('should to navigate do failed-process when service responds fail', fakeAsync(() => {
    const componentHandler: PersonalDataHandler = TestBed.get(PersonalDataHandler);
    jest.spyOn(componentHandler, 'sendToValidate').mockImplementation(() => {
      return Promise.resolve({
        code: 'error'
      })
    });
    const router: Router = TestBed.get(Router);
    const spyNavigate = jest.spyOn(router, 'navigate');

    configureValidForm();

    comp.onSubmit();
    tick(1);
    expect(spyNavigate).toHaveBeenCalledWith(['failed-process']);
  }));

  it('should to set errorMessage with data.message when service responds http 200 but with unknown data.status', fakeAsync(() => {
    const componentHandler: PersonalDataHandler = TestBed.get(PersonalDataHandler);
    jest.spyOn(componentHandler, 'sendToValidate').mockImplementation(() => {
      return Promise.resolve({
        code: 'XXX',
        message: 'error XXX'
      })
    });

    configureValidForm();

    comp.onSubmit();
    tick(1);
    expect(comp.errorMessage).toBe('error XXX');
  }));

  it('should to set errorMessage with static message when service fail', fakeAsync(() => {
    const componentHandler: PersonalDataHandler = TestBed.get(PersonalDataHandler);
    jest.spyOn(componentHandler, 'sendToValidate').mockImplementation(() => {
      return Promise.reject(new Error('error servicio'))
    });

    configureValidForm();

    comp.onSubmit();
    tick(1);
    expect(comp.errorMessage).toBe('Tu información no pudo ser enviada, por favor inténtalo nuevamente.');
  }));

});
 */