import { action, thunk } from "easy-peasy";
import {
  allContactsDummy,
  removeDummyDataAtIndex,
  updateDummyData,
} from "../dummyData";
import { IContact } from "../typings/IContact";
import { IContactStoreModel } from "../typings/IContactStoreModel";

export const contactStore: IContactStoreModel = {
  contacts: [],

  setContacts: action((state, payload: IContact[]) => {
    state.contacts = payload;
  }),

  pushContact: action((state, payload) => {
    state.contacts.push(payload);
  }),
  updateExistingContact: action((state, payload) => {
    if (
      state.contacts.findIndex((contact) => contact.id === payload.id) !== -1
    ) {
      state.contacts = state.contacts.map((contact) =>
        contact.id === payload.id ? payload : contact
      );
    } else {
      state.contacts.push(payload);
    }
  }),
  removeContactById: action((state, payload) => {
    const indexOfContact = state.contacts.findIndex(
      (contact) => contact.id === payload
    );
    state.contacts = state.contacts.splice(indexOfContact, 1);
  }),

  fetchContacts: thunk(async (actions, payload) => {
    // const result = await axios.get("/contacts");
    // actions.setContacts(results.data)

    actions.setContacts(allContactsDummy);
  }),

  fetchContactById: thunk(async (actions, payload) => {
    // const result = await axios.get(`/contacts/${payload}`);
    // actions.updateExistingContact(result.data);

    const pretendThisWasReturned = allContactsDummy.find(
      (contact) => contact.id === payload
    );

    if (pretendThisWasReturned) {
      actions.updateExistingContact(pretendThisWasReturned);
    }
  }),

  addNewContact: thunk(async (actions, payload, { getState }) => {
    // const result = await axios.post(`/contacts`, {
    //   payload,
    // });
    // actions.pushcontact(result.data);

    // We'll be submitting a Contact object with the id missing as the backend
    // will handle generating that id and return the entire newly created Contact
    // back to us. The line below simulates the response.
    const randomId = Math.floor(Math.random() * (50000000 - 100) + 100);
    const newContact = Object.assign(payload, { ...payload, id: randomId });
    if (
      allContactsDummy.findIndex((dummy) => dummy.id === newContact.id) === -1
    ) {
      allContactsDummy.push(newContact);
    }

    // actions.pushContact(newContact);
  }),

  modifyExistingContact: thunk(async (actions, payload) => {
    // const result = await axios.put(`/contacts/${payload.id}`);
    // actions.pushContact(payload);
    if (
      allContactsDummy.findIndex((contact) => contact.id === payload.id) !== -1
    ) {
      updateDummyData(payload);
    }

    actions.updateExistingContact(payload);
  }),

  deleteContact: thunk(async (actions, payload) => {
    // const result = await axios.delete(`/contacts/${payload}`);
    const indexOfContactDummy = allContactsDummy.findIndex(
      (contact) => contact.id === payload
    );
    removeDummyDataAtIndex(indexOfContactDummy);

    actions.removeContactById(payload);
  }),
};
