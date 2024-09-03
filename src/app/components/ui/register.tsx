import { useState } from 'react';

const RegisterPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-indigo-800 text-white flex items-center justify-center">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
          <input
            type="text"
            className="w-full p-3 rounded-lg bg-gray-200 text-gray-800"
            placeholder="Team Name"
            required
          />
          <input
            type="email"
            className="w-full p-3 rounded-lg bg-gray-200 text-gray-800"
            placeholder="Team Captain Email"
            required
          />
          <input
            type="text"
            className="w-full p-3 rounded-lg bg-gray-200 text-gray-800"
            placeholder="Phone Number"
            required
          />
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-700 text-white font-bold"
          >
            Register Now
          </button>
        </form>
      ) : (
        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Team Added Successfully!</h2>
          <p className="text-lg">Thank you for registering your team.</p>
        </div>
      )}
    </div>
  );
};

export default RegisterPage;
