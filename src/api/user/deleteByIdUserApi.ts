import { api } from '..';
import { formatApiErrorMessage } from '../../util/formatApiErrorMessage';

export const deleteByIdUserApi = async (id: string): Promise<void> => {
  await api.delete(`/user/${id}`).catch(error => {
    return Promise.reject(formatApiErrorMessage(error));
  });
};
