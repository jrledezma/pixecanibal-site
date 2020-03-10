import * as express from 'express';
import {
  controller,
  interfaces,
  httpGet,
  httpPost,
  httpPut,
  requestParam,
  queryParam
} from "inversify-express-utils";
import { inject, injectable } from "inversify";
import { ContactService } from "../services/contactService";
import { ServiceResultInterface } from "../interfaces/serviceResultInterface";
import { ConstantValues } from "../constantValues";
import { ApiTypes } from "../apiTypes";
import { MailInfoInterface } from "../interfaces/models/mailInfo";

@controller(ConstantValues.contactService)
export class ItemController implements interfaces.Controller {

  private contactService: ContactService;

  public constructor(@inject(ApiTypes.mailService) contactService: ContactService) {
    this.contactService = contactService;
  }

  @httpPost("/bymail")
  public async SendMail(req: express.Request, res: express.Response): Promise<void> {
    try {
      res.header('Access-Control-Allow-Origin', '*')
      console.log(req.body);
      let serviceResult: ServiceResultInterface = await this.contactService.ByMail(req.body as MailInfoInterface),
        statusNumber = 200;
      if (serviceResult.code === 'error') {
        statusNumber = 500;
      }
      res.status(statusNumber)
        .send(serviceResult);
    } catch (ex) {
      res.status(500)
        .json(ex);
    }
  }

}
