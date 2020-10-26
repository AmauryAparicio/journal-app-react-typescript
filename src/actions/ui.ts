import { uiActions } from "../misc/Actions";
import { iAction, iUiPayload } from "../misc/Interfaces";

const { uiSetError, uiRmError, uiStartLoading, uiFinishLoading } = uiActions;

export const setError = (err: string): iAction<iUiPayload> => ({
  type: uiSetError,
  payload: err
})

export const rmError = (): iAction<iUiPayload> => ({
  type: uiRmError,
  payload: null
})

export const startLoading = (): iAction<iUiPayload> => ({
  type: uiStartLoading
})

export const finishLoading = (): iAction<iUiPayload> => ({
  type: uiFinishLoading
})