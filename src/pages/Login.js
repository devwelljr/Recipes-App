import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  const history = useHistory();

  useEffect(() => {
    const MIN_CHARACTERES_PASSWORD = 7;
    const passwordValidate = password.length >= MIN_CHARACTERES_PASSWORD;
    const testEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/.test(email);

    if (testEmail && passwordValidate) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  const handleClick = () => {
    localStorage.setItem('user', `email:${email}`);
    history.push('/comidas');
  };

  return (
    <form>
      <input
        type="email"
        data-testid="email-input"
        onChange={ (e) => setEmail(e.target.value) }
        value={ email }
      />
      Email
      <input
        type="password"
        data-testid="password-input"
        onChange={ (e) => setPassword(e.target.value) }
        value={ password }
      />
      senha
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ disabled }
        onClick={ handleClick }
      >
        Entrar
      </button>
    </form>
  );
}

export default Login;
