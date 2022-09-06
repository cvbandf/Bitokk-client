import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {dispatchType, rootReducerType} from "../store/store";

export const useTypeDispatch = () => useDispatch<dispatchType>()
export const useTypeSelector: TypedUseSelectorHook<rootReducerType> = useSelector