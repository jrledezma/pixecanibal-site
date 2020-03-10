import "reflect-metadata";
import { Container } from "inversify";
import { ContactService } from "./services/contactService";
import { ContactServiceInterface } from "./interfaces/services/contactServiceInterface";
import { ApiTypes } from "./apiTypes"

let ApiContainer = new Container();
ApiContainer.bind<ContactServiceInterface>(ApiTypes.mailService).to(ContactService);
//ApiContainer.bind<ItemServiceInterface>(ApiTypes.itemService).to(ItemService);
export { ApiContainer }