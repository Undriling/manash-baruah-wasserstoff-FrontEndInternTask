import { useState, useEffect } from 'react';
import Editor from './components/editor';
import UsernamePrompt from './components/username';

function App() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('username');
    if (saved) setUsername(saved);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 font-serif">
      {!username && <UsernamePrompt setUsername={setUsername} />}
      {username && (
        <>
          <h1 className="text-4xl font-bold mb-4 text-blue-500">The Collab Editor By Manash</h1>
          <div className='mt-4'>
            <Editor username={username} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
