import request from "../request";
import {
  TRANSACTION_START,
  TRANSACTION_SUCCESS,
  TRANSACTION_FAIL
} from "../actionTypes";

export const TRANSACTIONStart = () => ({
  type: TRANSACTION_START
});

export const TRANSACTIONSuccess = res => ({
  type: TRANSACTION_SUCCESS,
  info: res
});

export const TRANSACTIONFail = error => ({
  type: TRANSACTION_FAIL,
  info: error
});

export const TRANSACTION = () => {
  return async (dispatch) => {
    try {
      dispatch(TRANSACTIONStart());
      const res = await request({
        url: "/account?bankName=unity bank&owner=1",
        method: "GET"
      });
      dispatch(TRANSACTIONSuccess(res));
    } catch (error) {
      dispatch(TRANSACTIONFail(error));
    }
  };
};
