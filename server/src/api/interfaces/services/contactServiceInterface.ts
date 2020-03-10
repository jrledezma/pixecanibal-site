import { MailInfoInterface } from "../models/mailInfo";
import { ServiceResultInterface } from "../serviceResultInterface";


export interface ContactServiceInterface {
  ByMail(config: MailInfoInterface): Promise<ServiceResultInterface>
}