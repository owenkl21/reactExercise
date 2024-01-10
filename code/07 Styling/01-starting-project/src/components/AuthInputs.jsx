import { useState } from 'react';

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <>
      <div
        id="auth-inputs"
        className="flex flex-col justify-center items-center aligntext-center max-w-md  m-auto p-8 rounded-md bg-zinc-800"
      >
        <div className="controls p-2 ">
          <div className="flex flex-col mb-4">
            <label className="mb-2 text-left font-medium text-gray-400">
              Email
            </label>
            <input
              className={`bg-gray-400 w-60 h-8 rounded-md text-white p-2 font-semibold text-zinc-800 focus:ring-yellow-500 focus:border-yellow-500  focus-1`}
              type="email"
              onChange={(event) =>
                handleInputChange('email', event.target.value)
              }
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-left font-medium text-gray-400 p-1">
              Password
            </label>
            <input
              className={`bg-gray-400 w-60 h-8 rounded-md text-white p-2 font-semibold text-zinc-800 border-yellow-500`}
              type="password"
              onChange={(event) =>
                handleInputChange('password', event.target.value)
              }
            />
          </div>
        </div>
        <div className="actions mt-4 justify-around space-x-4">
          <button type="button" className="text-yellow-500 mr-2">
            Create a new account
          </button>
          <span className="text-yellow-500">| </span>
          <button
            className="text-zinc-800 bg-yellow-500 p-3 uppercase font-medium rounded-md"
            onClick={handleLogin}
          >
            Sign In
          </button>
        </div>
      </div>
    </>
  );
}
