import { Dispatch } from 'redux';
import { setUserEdit, setUserEditVisible } from '../../store/user/UserSlice';
import { User } from '../../model/User';

export const editUserService = async (dispatch: Dispatch, user: User) => {
  dispatch(setUserEdit(user));
  dispatch(setUserEditVisible(true));
};
