import { api } from '..';
import { User } from '../../model/User';
import { formatApiErrorMessage } from '../../util/formatApiErrorMessage';

export const updateUserApi = async (user: User) => {
  await api.put(`/user/${user.id}`, user).catch(error => {
    return Promise.reject(formatApiErrorMessage(error));
  });
};
