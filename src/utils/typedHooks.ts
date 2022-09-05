import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState } from "../reduxStore/redux-store";
import { AppDispatch } from "../reduxStore/redux-store";


export const useAppDispatch: () => AppDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector