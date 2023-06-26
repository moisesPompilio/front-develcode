import { Dispatch } from 'redux';
import { deleteByIdUserApi } from '../../api/user/deleteByIdUserApi';
import { getUserService } from './getUserService';
import { triggerAlert } from '../../util/triggerAlert';
import { AlertEnum } from '../../model/Alert';

export const deleteByIdUserService = async (dispatch: Dispatch, id: string) => {
  try {
    await deleteByIdUserApi(id);
    await getUserService(dispatch);
    triggerAlert(dispatch, AlertEnum.OK, 'Usuário deletado com sucesso');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    triggerAlert(dispatch, AlertEnum.ERRO, error);
  }
};
