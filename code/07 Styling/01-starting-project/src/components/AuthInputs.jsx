import { useState, useEffect } from 'react';

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showCheckIcon, setShowCheckIcon] = useState(false);
  const [isSubmissionSuccessful, setIsSubmissionSuccessful] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    if (showCheckIcon) {
      setAnimateOut(false); // Reset animation out state
      const timer = setTimeout(() => {
        setAnimateOut(true); // Start fade-out animation after 1 second
        setTimeout(() => setShowCheckIcon(false), 1000); // Hide icon after fade-out
      }, 2000); // Keep the icon visible for 2 seconds

      return () => clearTimeout(timer);
    }
  }, [showCheckIcon]);
  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }

    // Reset the states wease-in; input changes
    setShowCheckIcon(false);
    setIsSubmissionSuccessful(false);
  }

  function handleLogin() {
    setSubmitted(true); // Mark the form as submitted

    // Validate email and password
    const isEmailValid = emailRegex.test(enteredEmail);
    const isPasswordValid = enteredPassword.trim().length >= 6;

    if (isEmailValid && isPasswordValid) {
      setIsSubmissionSuccessful(true);

      // Set a timeout to show the check icon
      const timer = setTimeout(() => {
        setShowCheckIcon(true);
      }, 1000); // 1 second delay
      return () => clearTimeout(timer);
    } else {
      setIsSubmissionSuccessful(false);
      setShowCheckIcon(false); // Hide the check icon if validation fails
    }
  }

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const emailNotValid = submitted && !emailRegex.test(enteredEmail);

  const passwordNotValid = submitted && enteredPassword.trim().length < 6;
  useEffect(() => {
    if (isSubmissionSuccessful) {
      const timer = setTimeout(() => {
        setShowCheckIcon(true);
      }, 1000); // 1 second delay

      return () => clearTimeout(timer);
    }
  }, [isSubmissionSuccessful]);

  useEffect(() => {
    if (showCheckIcon) {
      const timer = setTimeout(() => {
        setShowCheckIcon(false);
      }, 3000); // 1 second delay

      return () => clearTimeout(timer);
    }
  }, [showCheckIcon]);

  return (
    <>
      <div
        id="auth-inputs"
        className="flex flex-col justify-center items-center aligntext-center max-w-md  m-auto p-8 rounded-md bg-zinc-800 shadow-md shadow-black"
      >
        <div className="controls p-2 ">
          <div className="flex flex-col mb-4">
            <label
              className={
                emailNotValid
                  ? 'mb-2 text-left font-medium text-red-500'
                  : 'mb-2 text-left font-medium text-gray-400'
              }
            >
              Email
            </label>
            <input
              className={
                emailNotValid
                  ? 'bg-gray-400 w-60 h-8 rounded-md text-white p-2 font-semibold text-zinc-800 ring-4 ring-red-500 transition duration-200 focus:outline-none'
                  : 'bg-gray-400 w-60 h-8 rounded-md text-white p-2 font-semibold text-zinc-800 focus:outline-none focus:ring-4 focus:ring-yellow-500 transition duration-200'
              }
              type="email"
              onChange={(event) =>
                handleInputChange('email', event.target.value)
              }
            />
          </div>
          <div className="flex flex-col">
            <label
              className={
                emailNotValid
                  ? 'mb-2 text-left font-medium text-red-500'
                  : 'mb-2 text-left font-medium text-gray-400'
              }
            >
              Password
            </label>
            <input
              className={
                passwordNotValid
                  ? 'bg-gray-400 w-60 h-8 rounded-md text-white p-2 font-semibold text-zinc-800 ring-4 ring-red-500 transition duration-200 focus:outline-none'
                  : 'bg-gray-400 w-60 h-8 rounded-md text-white p-2 font-semibold text-zinc-800 focus:outline-none focus:ring-4 focus:ring-yellow-500 transition duration-200'
              }
              type="password"
              onChange={(event) =>
                handleInputChange('password', event.target.value)
              }
            />
          </div>
        </div>
        {showCheckIcon && (
          <div className="w-12 h-12 rounded-full bg-yellow-500 flex justify-center items-center animate-pulse delay-100 mt-4">
            <div className="check-icon"></div>
          </div>
        )}
        <div className="actions flex flex-col sm:flex-row justify-center items-center mt-4 space-y-2 sm:space-y-0 sm:space-x-4">
          <button
            type="button"
            className="text-yellow-500 hover:text-yellow-600 mb-2 sm:mb-0"
          >
            Create a new account
          </button>

          {/* Optional: Remove the separator for larger screens */}
          <span className="text-yellow-500 hidden md:block">|</span>

          <button
            className="button-82-pushable mt-4"
            role="button"
            onClick={handleLogin}
          >
            <span className="button-82-shadow"></span>
            <span className="button-82-edge"></span>
            <span className="button-82-front text font-medium">Sign In</span>
          </button>
        </div>
      </div>
    </>
  );
}
