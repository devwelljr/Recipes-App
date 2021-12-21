import React from 'react';

function Login() {
  return (
    <form>
      <input type="email" data-testid="email-input" />
      Email
      <input type="password" data-testid="password-input" />
      senha
      <button type="button" data-testid="login-submit-btn">Entrar</button>
    </form>
  );
}

export default Login;
