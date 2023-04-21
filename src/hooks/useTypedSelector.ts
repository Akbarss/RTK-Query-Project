import { TypedUseSelectorHook, useSelector } from "react-redux";
import { TypeRootState } from "../core/redux/store";

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector;
