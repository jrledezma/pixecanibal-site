import { injectable, inject } from 'inversify';
import * as nodemailer from 'nodemailer'
import { CommonFunctions } from "../common/commonFunctions";
import { ServiceResultInterface } from '../interfaces/serviceResultInterface';
import { ContactServiceInterface } from '../interfaces/services/contactServiceInterface';
import { MailInfoInterface } from '../interfaces/models/mailInfo';

@injectable()
export class ContactService implements ContactServiceInterface {

  //#region Public Properties

  public ByMail = this.byMail;

  //#endregion

  public constructor() { }

  //#region Private Functions

  private async byMail(mailInfo: MailInfoInterface): Promise<ServiceResultInterface> {
    try {
      let transporter = nodemailer.createTransport({
        host: CommonFunctions.AppConfiguration.contact.mailHost,
        port: Number.parseInt(CommonFunctions.AppConfiguration.contact.hostPort),
        secure: true,
        auth: {
          user: CommonFunctions.AppConfiguration.contact.mailAddress,
          pass: CommonFunctions.AppConfiguration.contact.mailPassword
        }
      });

      transporter.sendMail({
        from: CommonFunctions.AppConfiguration.contact.mailAddress,
        to: CommonFunctions.AppConfiguration.contact.mailAddress,
        subject: 'Contact from Absque Site',
        text: `${mailInfo.mailName} - ${mailInfo.mailAddress}\n${mailInfo.message}`
      }, (error: Error, info: any) => {
        if (error) {
          return {
            code: 'error',
            detail: error
          };
        }
      });
      return {
        code: 'success',
        detail: {}
      };
    } catch (ex) {
      console.log(ex);
      return {
        code: 'error',
        detail: ex.message
      };
    }
  }
  //#endregion
}