import './Alert.scss';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/useAppSelector';
import { setAlerVisible } from '../../store/alert/AlertSlice';

export function Alert() {
  const dispatch = useDispatch();
  const alert = useAppSelector(state => state.alert.alert);
  const message = useAppSelector(state => state.alert.message);
  const alertVisible = useAppSelector(state => state.alert.alerVisible);

  const handleOk = () => {
    dispatch(setAlerVisible(false));
  };

  return (
    <div className={alertVisible ? 'overlay-bg' : 'none'}>
      <div className="alert">
        <div className="alert-icon">
          <h1>
            <i className={alert.icon} />
          </h1>
        </div>
        <div className="alert-txt">
          <h3>{alert.title}</h3>
          <p>{message}</p>
        </div>
        <div className="user-edit-btns">
          <button
            type="button"
            className="btn-secondary"
            onClick={() => handleOk()}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
