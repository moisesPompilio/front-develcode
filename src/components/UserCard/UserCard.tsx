import './UserCard.scss';
import { User } from '../../model/User';

type UserCardProps = {
  user: User;
  onAlterarUser: () => void;
  onDeleteUser: () => void;
};

export function UserCard({ user, onAlterarUser, onDeleteUser }: UserCardProps) {
  return (
    <div className="user-card">
      <div className="user-card-image">
        <img src={user.foto} alt={user.nome} />
      </div>
      <div className="user-card-descriptions">
        <pre>Nome: </pre> <pre>{user.nome}</pre>
      </div>
      <div className="user-card-descriptions">
        <pre>Nascimento: </pre> <pre>{user.dataDeNascimento}</pre>
      </div>
      <div className="user-card-descriptions">
        <button type="button" className="btn-danger" onClick={onDeleteUser}>
          <i className="fas fa-trash" />
        </button>
        <button type="button" className="btn-primary" onClick={onAlterarUser}>
          Alterar
        </button>
      </div>
      <div className="bg-white"> </div>
    </div>
  );
}
