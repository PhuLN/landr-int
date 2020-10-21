import { createTypedHooks } from "easy-peasy";
import { IGlobalStoreModel } from "./typings/IGlobalStoreModel";

const typedHooks = createTypedHooks<IGlobalStoreModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
