import { useState } from "react";

const UsernamePrompt = ({ setUsername }) => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (!name.trim()) {
      alert("Please enter a valid Username");
      return;
    }

    setUsername(name);
    localStorage.setItem("username", name);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-400 bg-opacity-60 z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-80 text-center space-y-4">
        <div className="items-center justify-center">
            <h2 className="text-center font-mono text-purple-500 font-bold text-2xl">CollabCo.in</h2>
            <p className="text-sm text-gray-400">The Collab Editor By Manash Baruah</p>
        </div>
        <h2 className="text-lg font-semibold text-blue-600">Enter your Username</h2>
        <input
          className="w-full border rounded px-3 py-2 text-blue-600"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. ManashBaruah"
        />
        <button
          onClick={handleSubmit}
          className="bg-cyan-400 cursor-pointer text-white px-4 py-2 rounded hover:bg-cyan-500">
          Join
        </button>
      </div>
    </div>
  );
};

export default UsernamePrompt;
