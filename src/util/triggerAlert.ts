import { Dispatch } from 'redux';
import { AlertEnum } from '../model/Alert';
import {
  setAlerVisible,
  setAlert,
  setMessage,
} from '../store/alert/AlertSlice';

export const triggerAlert = (
  dispatch: Dispatch,
  alertEnum: AlertEnum,
  message: string,
) => {
  dispatch(setAlert(alertEnum));
  dispatch(setMessage(message));
  dispatch(setAlerVisible(true));
};
