import { createStore } from "easy-peasy";
import { contactStore } from "./store-instances/contact";
import { IGlobalStoreModel } from "./typings/IGlobalStoreModel";

const storeModel: IGlobalStoreModel = {
  contacts: contactStore,
};

export const globalStore = createStore(storeModel);
