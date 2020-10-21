import { Action, Thunk } from "easy-peasy";
import { IContact } from "./IContact";
import { IGlobalStoreModel } from "./IGlobalStoreModel";

export interface IContactStoreModel {
  contacts: IContact[];

  setContacts: Action<IContactStoreModel, IContact[]>;
  pushContact: Action<IContactStoreModel, IContact>;
  updateExistingContact: Action<IContactStoreModel, IContact>;
  removeContactById: Action<IContactStoreModel, number>;

  fetchContacts: Thunk<IContactStoreModel>;
  fetchContactById: Thunk<IContactStoreModel, number>;
  addNewContact: Thunk<IContactStoreModel, IContact, {}, IGlobalStoreModel>;
  modifyExistingContact: Thunk<IContactStoreModel, IContact>;
  deleteContact: Thunk<IContactStoreModel, number>;
}
