import { api } from '..';
import { User } from '../../model/User';
import { formatApiErrorMessage } from '../../util/formatApiErrorMessage';

export async function getUsersApi(): Promise<User[]> {
  const response = await api.get('/user').catch(error => {
    return Promise.reject(formatApiErrorMessage(error));
  });
  const users: User[] = response.data;
  return users;
}
