import './UserEdit.scss';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { setUserEditVisible } from '../../store/user/UserSlice';
import { User } from '../../model/User';

type Props = {
  handleSalvar: (user: User) => void;
};
export function UserEdit({ handleSalvar }: Props) {
  const dispatch = useDispatch();
  const user = useAppSelector(state => state.user.userEdit);
  const [foto, setFoto] = useState(user.foto);
  const [nome, setNome] = useState(user.nome);
  const [nascimento, setNascimento] = useState(user.dataDeNascimento);

  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const newUser: User = { ...user, foto, nome, dataDeNascimento: nascimento };
    handleSalvar(newUser);
  };

  const handleCancelar = () => {
    dispatch(setUserEditVisible(false));
  };

  return (
    <div className="overlay-bg">
      <form onSubmit={submit}>
        <div className="user-edit">
          <div className="user-edit-image">
            <img src={foto} alt={nome} />
          </div>
          <div>
            <div className="user-edit-inputs">
              <label htmlFor="foto">
                link foto:
                <input
                  id="foto"
                  type="url"
                  placeholder="Ex: https://www.develcode.com.br/"
                  value={foto}
                  onChange={e => setFoto(e.target.value)}
                  maxLength={255}
                  required
                />
              </label>
            </div>
            <div className="user-edit-inputs">
              <label htmlFor="nome">
                Nome:
                <input
                  id="nome"
                  type="text"
                  placeholder="Ex: Develcode"
                  value={nome}
                  onChange={e => setNome(e.target.value)}
                  maxLength={255}
                  required
                />
              </label>
            </div>
            <div className="user-edit-inputs">
              <label htmlFor="nascimento">
                Nascimento:
                <input
                  id="nascimento"
                  type="date"
                  value={nascimento}
                  placeholder="28/09/2014"
                  onChange={e => setNascimento(e.target.value)}
                  required
                />
              </label>
            </div>
          </div>
          <div className="user-edit-btns">
            <button
              type="button"
              className="btn-secondary"
              onClick={() => handleCancelar()}
            >
              Cancelar
            </button>
            <button type="submit" className="btn-primary">
              Salvar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
