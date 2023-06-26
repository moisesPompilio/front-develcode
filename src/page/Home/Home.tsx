import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import './Home.scss';
import { getUserService } from '../../service/user/getUserService';
import { UserCard } from '../../components/UserCard/UserCard';
import { User } from '../../model/User';
import { deleteByIdUserService } from '../../service/user/deleteByIdUserService';
import { updateUserService } from '../../service/user/updateUserService';
import { UserEdit } from '../../components/UserEdit/UserEdit';
import { editUserService } from '../../service/user/editUserService';
import { createUserService } from '../../service/user/createUserService';
import { CreateUserCard } from '../../components/CreateUserCard/CreateUserCard';
import { LoadingCard } from '../../components/LoadingCard/LoadingCard';

export function Home() {
  const dispatch = useDispatch();
  const users = useAppSelector(state => state.user.users);
  const loading = useAppSelector(state => state.user.status);
  const userEditVisible = useAppSelector(state => state.user.userEditVisible);
  const emptyUser: User = { id: '', dataDeNascimento: '', foto: '', nome: '' };

  useEffect(() => {
    getUserService(dispatch);
  }, []);

  const handleDeleteUser = (id: string) => {
    deleteByIdUserService(dispatch, id);
  };

  const handleAlterarUser = (user: User) => {
    editUserService(dispatch, user);
  };
  const handleSalvarUser = (newUser: User) => {
    if (newUser.id === '') {
      createUserService(dispatch, newUser);
    } else {
      updateUserService(dispatch, newUser);
    }
  };

  return (
    <div className="home container">
      <h1>Usuários cadastrados </h1>
      <div className="usuarios">
        {loading === 'loading' ? (
          <LoadingCard />
        ) : (
          <CreateUserCard onCreateUser={() => handleAlterarUser(emptyUser)} />
        )}
        {users[0] &&
          users.map(user => (
            <UserCard
              user={user}
              key={user.id}
              onAlterarUser={() => handleAlterarUser(user)}
              onDeleteUser={() => handleDeleteUser(user.id)}
            />
          ))}
      </div>
      {userEditVisible && <UserEdit handleSalvar={handleSalvarUser} />}
    </div>
  );
}
