import { useState } from "react";
import SetSigningKey from "./components/SetSigningKey";
import isValid from './utils/isValid'
import Dashboard from "./components/Dashboard";

function App() {

  const [signingKey, setSigningKey] = useState('');
  const [isKeySet, setIsKeySet] = useState(false)
  const [error, setError] = useState('');

  const handleKeySubmission = () => {
    if (! isValid(signingKey)) {setError('Invalid Signing Key'); return null}

    setError('')
    setIsKeySet(true)
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {!isKeySet && <SetSigningKey setSigningKey={setSigningKey} handleSubmission={handleKeySubmission}/>}
      {isKeySet && <Dashboard signingKey={signingKey} />}
      <span className="text-red-600 mt-6">{error}</span>
    </div>
  );
}

export default App;
