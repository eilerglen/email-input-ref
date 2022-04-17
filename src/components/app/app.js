import React from 'react';
import appStyles from './app.module.css';
import PasswordResetForm from '../password-reset-form/passwordResetForm';

function App() {
  return (
    <main className={appStyles.app}>
      <PasswordResetForm/>
    </main>
  );
}

export default App;
