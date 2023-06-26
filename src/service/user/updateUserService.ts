import { Dispatch } from 'redux';
import { getUserService } from './getUserService';
import { updateUserApi } from '../../api/user/updateUserApi';
import { User } from '../../model/User';
import { setUserEditVisible } from '../../store/user/UserSlice';
import { AlertEnum } from '../../model/Alert';
import { triggerAlert } from '../../util/triggerAlert';

export const updateUserService = async (dispatch: Dispatch, user: User) => {
  try {
    await updateUserApi(user);
    await getUserService(dispatch);
    dispatch(setUserEditVisible(false));
    triggerAlert(dispatch, AlertEnum.OK, 'Usuário alterado com sucesso');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    triggerAlert(dispatch, AlertEnum.ERRO, error);
  }
};
