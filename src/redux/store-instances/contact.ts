import { action, thunk } from "easy-peasy";
import { axios } from "../../services/AxiosService";
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
    allContactsDummy.push(payload);
  }),
  updateExistingContact: action((state, payload) => {
    if (
      allContactsDummy.findIndex((contact) => contact.id === payload.id) !==
        -1 &&
      state.contacts.findIndex((contact) => contact.id === payload.id) !== -1
    ) {
      state.contacts = state.contacts.map((contact) =>
        contact.id === payload.id ? payload : contact
      );
      updateDummyData(payload);
    } else {
      state.contacts.push(payload);
      allContactsDummy.push(payload);
    }
  }),
  removeContactById: action((state, payload) => {
    const indexOfContact = state.contacts.findIndex(
      (contact) => contact.id === payload
    );
    const indexOfContactDummy = allContactsDummy.findIndex(
      (contact) => contact.id === payload
    );

    removeDummyDataAtIndex(indexOfContactDummy);
    state.contacts = state.contacts.splice(indexOfContact, 1);
  }),

  fetchContacts: thunk(async (actions, payload) => {
    // const result = await axios.get("/contacts");
    // actions.setContacts(results.data)

    actions.setContacts(allContactsDummy);
  }),

  fetchContactById: thunk(async (actions, payload) => {
    // const result = await axios.get(`/contacts/${payload}`);
    // actions.pushContact(result.data);

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
    Object.assign(payload, { ...payload, id: randomId });
    actions.pushContact(Object.assign(payload, { ...payload, id: randomId }));
  }),

  modifyExistingContact: thunk(async (actions, payload) => {
    // const result = await axios.put(`/contacts/${payload.id}`);
    // actions.pushContact(payload);

    actions.updateExistingContact(payload);
  }),

  deleteContact: thunk(async (actions, payload) => {
    // const result = await axios.delete(`/contacts/${payload}`);

    actions.removeContactById(payload);
  }),
};
