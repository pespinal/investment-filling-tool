import { LoginModule } from './login.module';

describe('EmploymentInfoModule', () => {
  let personalDataModule: LoginModule;

  beforeEach(() => {
    personalDataModule = new LoginModule();
  });

  it('should create an instance', () => {
    expect(personalDataModule).toBeTruthy();
  });

});
