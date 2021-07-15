// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page)
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  const usernameRef = React.useRef();
  const [errorMessage, setErrorMessage] = React.useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitUsername(usernameRef.current.value);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    const isValid = value === value.toLowerCase();
    setErrorMessage(isValid ? null : 'Username must be lower case.');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          onChange={handleChange}
          ref={usernameRef}
          type="text"
        />
        {errorMessage && (
          <p role="alert">{errorMessage}</p>
        )}
      </div>
      <button
        disabled={Boolean(errorMessage)}
        type="submit"
      >
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
