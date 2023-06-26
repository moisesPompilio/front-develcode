import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AlertEnum, AlertType, AlertValues } from '../../model/Alert';

type statealert = {
  alert: AlertType;
  message: string;
  alerVisible: boolean;
};

const initialState: statealert = {
  alert: { title: '', icon: '' },
  message: '',
  alerVisible: false,
};

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setAlert: (state, action: PayloadAction<AlertEnum>) => {
      return {
        ...state,
        alert: AlertValues[action.payload],
      };
    },
    setMessage: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        message: action.payload,
      };
    },
    setAlerVisible: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        alerVisible: action.payload,
      };
    },
  },
});

export const { setAlert, setMessage, setAlerVisible } = alertSlice.actions;
export const alertReducer = alertSlice.reducer;
