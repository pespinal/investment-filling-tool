/* import { PersonalDataHandler } from './login.handler';
import { TestBed } from '@angular/core/testing';
import { HttpServiceModule, CONFIG_APP, CONFIG_CIPHER, CONFIG_COMMON, CONFIG_TOKEN, InvokerService, SessionStorageHandler, CONFIG_LOGGER, LocalStorageHandler, LoggerService, HttpServiceHandler } from 'cob-infrastructure';
import { LoggerModule } from 'cob-infrastructure';
import * as MockDate from 'mockdate';
import { SessionStorageHandlerMock } from '@mocks/session-storage-handler-mock';

describe('PersonalDataHandler', () => {
  let service: PersonalDataHandler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpServiceModule, LoggerModule],
      providers: [
        PersonalDataHandler,
        InvokerService,
        { provide: SessionStorageHandler, useClass: SessionStorageHandlerMock },
        { provide: LocalStorageHandler, useClass: SessionStorageHandlerMock },
        {
          provide: LoggerService, useValue: {
            logException: () => Promise.resolve(),
            logRequest: () => Promise.resolve(),
            logResponse: () => Promise.resolve()
          }
        },
        { provide: CONFIG_APP, useValue: {} },
        { provide: CONFIG_CIPHER, useValue: {} },
        { provide: CONFIG_COMMON, useValue: {} },
        { provide: CONFIG_TOKEN, useValue: {} },
        { provide: CONFIG_LOGGER, useValue: {} }
      ]
    }).compileComponents();

    service = TestBed.get(PersonalDataHandler);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });


  test('should call to service with personaldInfoDocumentNumber formated', () => {

    const formValue = {
      personalInfoDocumentNumber: '25.263.125-k',
      personalInfoTelephone: '956898568',
      personalInfoEmail: 'mail@mail.com',
    };

    MockDate.set('2000-11-22'); //congelamos la fecha por el startTime de logger config
    const invoker: InvokerService = TestBed.get(InvokerService);
    const spyPost = jest.spyOn(invoker, 'post');

    const http: HttpServiceHandler = TestBed.get(HttpServiceHandler);
    jest.spyOn(http, 'post').mockImplementation(() => Promise.resolve());

    service.sendToValidate(formValue);

    expect(spyPost).toHaveBeenCalledWith(
      { personalInfoDocumentNumber: '25263125K', personalInfoEmail: 'mail@mail.com', personalInfoTelephone: '956898568' },
      '/onboarding/acquisition/application/verify/',
      { "class": "PersonalDataHandler", "method": "sendToValidate", "startTime": 974851200000 });
  });

});
 */