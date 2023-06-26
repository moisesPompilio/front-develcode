import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { STATUS, TypeSTATUS } from '../../model/Status';
import { User } from '../../model/User';

type stateUser = {
  users: User[];
  status: TypeSTATUS;
  userEdit: User;
  userEditVisible: boolean;
};

const initialState: stateUser = {
  users: [],
  status: STATUS.IDLE,
  userEdit: { dataDeNascimento: '', foto: '', nome: '', id: '' },
  userEditVisible: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User[]>) => {
      return {
        ...state,
        users: action.payload,
      };
    },
    setStatusUser: (state, action: PayloadAction<TypeSTATUS>) => {
      return {
        ...state,
        status: action.payload,
      };
    },
    setUserEdit: (state, action: PayloadAction<User>) => {
      return {
        ...state,
        userEdit: action.payload,
      };
    },
    setUserEditVisible: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        userEditVisible: action.payload,
      };
    },
  },
});

export const { setUser, setStatusUser, setUserEdit, setUserEditVisible } =
  userSlice.actions;
export const userReducer = userSlice.reducer;
