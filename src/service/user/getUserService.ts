import { Dispatch } from 'redux';
import { STATUS } from '../../model/Status';
import { setStatusUser, setUser } from '../../store/user/UserSlice';
import { getUsersApi } from '../../api/user/getUsersApi';
import { AlertEnum } from '../../model/Alert';
import { triggerAlert } from '../../util/triggerAlert';

export const getUserService = async (dispatch: Dispatch): Promise<void> => {
  dispatch(setStatusUser(STATUS.LOADING));
  try {
    const users = await getUsersApi();
    dispatch(setUser(users));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    triggerAlert(dispatch, AlertEnum.ERRO, error);
  }
  dispatch(setStatusUser(STATUS.IDLE));
};
