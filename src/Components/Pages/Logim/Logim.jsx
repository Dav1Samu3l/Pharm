import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormContainer from '../../style/Form-style';
import BodyContainer from '../../style/Body-styled';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Por favor, insira um e-mail válido.');
      return;
    }
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      setError('Por favor, insira uma senha válida (mínimo de 8 caracteres com números e letras).');
      return;
    }

    // faz a navegação para a página de Lojas após o login
    navigate('/Lojas');
  };

  return (
    <BodyContainer>




      <FormContainer>
        <div className='Login'>
          <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">E-mail:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password">Senha:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              {error && <div className="error">{error}</div>}
              <button type="submit">Entrar</button>
            </form>
          </div>
        </div>
      </FormContainer>
    </BodyContainer>
  );
}

export default LoginPage;
