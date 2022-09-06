import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "./rootReducer";

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type rootReducerType = ReturnType<typeof rootReducer>
export type setupStoreType = ReturnType<typeof setupStore>
export type dispatchType = setupStoreType['dispatch']