import { api } from '..';
import { User } from '../../model/User';
import { formatApiErrorMessage } from '../../util/formatApiErrorMessage';

export const createUserApi = async (user: User) => {
  await api.post(`/user`, user).catch(error => {
    return Promise.reject(formatApiErrorMessage(error));
  });
};
