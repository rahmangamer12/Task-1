import { useState } from 'react';
import { motion } from 'framer-motion';

const RegisterPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-indigo-900 text-white flex items-center justify-center">
      {!isSubmitted ? (
        <motion.form
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="space-y-6 max-w-md w-full bg-white p-8 rounded-lg shadow-2xl"
        >
          <motion.input
            whileFocus={{ scale: 1.05, borderColor: 'rgba(99, 102, 241, 1)' }}
            type="text"
            className="w-full p-4 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="Team Name"
            required
          />
          <motion.input
            whileFocus={{ scale: 1.05, borderColor: 'rgba(99, 102, 241, 1)' }}
            type="email"
            className="w-full p-4 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="Team Captain Email"
            required
          />
          <motion.input
            whileFocus={{ scale: 1.05, borderColor: 'rgba(99, 102, 241, 1)' }}
            type="text"
            className="w-full p-4 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="Phone Number"
            required
          />
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(37, 99, 235, 1)' }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-4 rounded-lg bg-indigo-600 text-white font-bold transition"
          >
            Register Now
          </motion.button>
        </motion.form>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center p-8 bg-white rounded-lg shadow-2xl"
        >
          <h2 className="text-3xl font-bold mb-4 text-indigo-800">Team Added Successfully!</h2>
          <p className="text-lg text-gray-800">Thank you for registering your team.</p>
        </motion.div>
      )}
    </div>
  );
};

export default RegisterPage;
