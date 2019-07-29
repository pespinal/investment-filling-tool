/* import { Injectable } from '@angular/core';
import { GeneralConfigService } from '@shared/services/general-config-service';
import { InvokerService } from 'cob-infrastructure';
import * as moment from 'moment';

@Injectable()
export class PersonalDataHandler {
  constructor(
    private generalConfigService: GeneralConfigService,
    private service: InvokerService
  ) { }

  public async sendToValidate(bodyData): Promise<any> {
    return await this.service.post(
      this.buildBody(bodyData),
      this.generalConfigService.getApiUrl('service_personal_data'),
      { class: 'PersonalDataHandler', method: 'sendToValidate' }
    );
  }

  private buildBody(formValue): any {
    const personalInfoDocumentNumber = formValue.personalInfoDocumentNumber.replace(/[^0-9kK]/g, '').toUpperCase();
    return Object.assign(formValue, { personalInfoDocumentNumber })
  }

}
 */