import './Footer.scss';

export function Footer() {
  return (
    <footer className="footer py-5 bg-dark">
      <div className="container">
        <div className="footer-content text-white grid">
          <div className="footer-item text-center">
            <h6 className="fs-17 fw-6">Links</h6>
            <ul>
              <li>
                <a
                  href="https://github.com/moisesPompilio/front-develcode"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="fs-15"
                >
                  Repositorie Front
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/moisesPompilio/api-develcode"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="fs-15"
                >
                  Repositorie API
                </a>
              </li>
              <li>
                <a
                  href="http://localhost:3000/v1/docs"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="fs-15"
                >
                  Documentação da API
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/moisesPompilio"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="fs-15"
                >
                  Developer Repository
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-item text-center">
            <h6 className="fs-17 fw-6">conheça a DevelCode</h6>
            <ul>
              <li>
                <a
                  href="https://www.develcode.com.br/quem-somos"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="fs-15"
                >
                  Informações da empresa
                </a>
              </li>
              <li>
                <a
                  href="https://www.develcode.com.br/clientes/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="fs-15"
                >
                  Clientes
                </a>
              </li>
              <li>
                <a
                  href="https://www.develcode.com.br/contato"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="fs-15"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-item text-center">
            <h6 className="fs-17 fw-6">Contato do criador dessa pargina</h6>
            <ul>
              <li>
                <span>
                  <i className="fas fa-phone" />
                </span>
                <span className="fs-15">(91)987420521</span>
              </li>
              <li>
                <span>
                  <i className="fas fa-envelope" />
                </span>
                <span className="fs-15">moisesalexandrep.c@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
