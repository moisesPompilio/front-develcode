import { Dispatch } from 'redux';
import { setUserEditVisible } from '../../store/user/UserSlice';
import { getUserService } from './getUserService';
import { User } from '../../model/User';
import { createUserApi } from '../../api/user/createUserApi';
import { AlertEnum } from '../../model/Alert';
import { triggerAlert } from '../../util/triggerAlert';

export const createUserService = async (dispatch: Dispatch, user: User) => {
  try {
    await createUserApi(user);
    await getUserService(dispatch);
    dispatch(setUserEditVisible(false));
    triggerAlert(dispatch, AlertEnum.OK, 'Usuário criado com sucesso');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    triggerAlert(dispatch, AlertEnum.ERRO, error);
  }
};
