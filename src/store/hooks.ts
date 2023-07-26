import {useDispatch, useSelector, TypedUseSelectorHook} from "react-redux";
import {StoreState, AppDispatch} from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<StoreState> = useSelector