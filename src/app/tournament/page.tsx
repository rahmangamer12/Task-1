"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const JoinTournament = () => {
  const router = useRouter();
  const [teamName, setTeamName] = useState('');
  const [captainName, setCaptainName] = useState('');
  const [captainEmail, setCaptainEmail] = useState('');
  const [teamMembers, setTeamMembers] = useState([{ name: '' }]);
  const [tournament, setTournament] = useState('');
  const [category, setCategory] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleAddMember = () => {
    setTeamMembers([...teamMembers, { name: '' }]);
  };

  const handleRemoveMember = (index: number) => {
    const members = teamMembers.slice();
    members.splice(index, 1);
    setTeamMembers(members);
  };

  const handleMemberChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const members = teamMembers.slice();
    members[index].name = event.target.value;
    setTeamMembers(members);
  };

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!teamName || !captainName || !captainEmail || !tournament || !category || !timeSlot) {
      setError('Please fill in all required fields.');
      return;
    }

    setSuccess('Successfully registered for the tournament!');
    setError('');

    setTimeout(() => router.push('/'), 3000); // Redirect to home after 3 seconds
  };

  return (
    <div className="bg-blue-900 min-h-screen flex justify-center items-center">
      <div className="bg-blue-800 p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-3xl font-semibold text-center mb-6 text-white">Join a Tournament</h2>
        <form onSubmit={handleJoin} className="space-y-4">
          <div>
            <label htmlFor="teamName" className="block text-sm font-medium text-white">
              Team Name
            </label>
            <input
              id="teamName"
              type="text"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md bg-blue-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="captainName" className="block text-sm font-medium text-white">
              Team Captain&apos;s Name
            </label>
            <input
              id="captainName"
              type="text"
              value={captainName}
              onChange={(e) => setCaptainName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md bg-blue-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="captainEmail" className="block text-sm font-medium text-white">
              Captain&apos;s Email
            </label>
            <input
              id="captainEmail"
              type="email"
              value={captainEmail}
              onChange={(e) => setCaptainEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md bg-blue-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-white">Team Members</label>
            {teamMembers.map((member, index) => (
              <div key={index} className="flex space-x-2">
                <input
                  type="text"
                  value={member.name}
                  onChange={(e) => handleMemberChange(index, e)}
                  className="w-full px-4 py-2 border rounded-md bg-blue-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={`Member ${index + 1}`}
                  required
                />
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveMember(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddMember}
              className="w-full py-2 px-4 border rounded-md text-blue-200 hover:bg-blue-700"
            >
              Add Team Member
            </button>
          </div>

          <div>
            <label htmlFor="tournament" className="block text-sm font-medium text-white">
              Select Tournament
            </label>
            <select
              id="tournament"
              value={tournament}
              onChange={(e) => setTournament(e.target.value)}
              className="w-full px-4 py-2 border rounded-md bg-blue-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select...</option>
              <option value="tournament1">Tournament 1</option>
              <option value="tournament2">Tournament 2</option>
              <option value="tournament3">Tournament 3</option>
            </select>
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-white">
              Select Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 border rounded-md bg-blue-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select...</option>
              <option value="amateur">Amateur</option>
              <option value="professional">Professional</option></select>
          </div>

          <div>
            <label htmlFor="timeSlot" className="block text-sm font-medium text-white">
              Preferred Time Slot
            </label>
            <select
              id="timeSlot"
              value={timeSlot}
              onChange={(e) => setTimeSlot(e.target.value)}
              className="w-full px-4 py-2 border rounded-md bg-blue-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select...</option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 transition"
          >
            Join Tournament
          </button>

          {error && <p className="text-red-500 mt-4">{error}</p>}
          {success && <p className="text-green-500 mt-4">{success}</p>}
        </form>
      </div>
    </div>
  );
};

export default JoinTournament;
