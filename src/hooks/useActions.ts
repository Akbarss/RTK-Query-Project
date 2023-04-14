import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { cartAction } from "../core/redux/features/cart/cartSlice";

const allActions = {
  ...cartAction,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActions, dispatch);
};
