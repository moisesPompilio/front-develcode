import './CreateUserCard.scss';

type Props = {
  onCreateUser: () => void;
};

export function CreateUserCard({ onCreateUser }: Props) {
  return (
    <div
      className="create-user"
      onClick={onCreateUser}
      role="button"
      onKeyDown={event => {
        if (event.key === 'Enter') {
          onCreateUser();
        }
      }}
      tabIndex={0}
    >
      <div className="create-user-icon">
        <i className="fas fa-plus fa-2x" />
      </div>
      <div className="create-user-title">
        <h3>Criar novo usuário</h3>
      </div>
    </div>
  );
}
