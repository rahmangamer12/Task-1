"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type TeamMember = {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
};

type Team = {
  name: string;
  members: number[];
};

const teamId = 'team123'; // Example team ID

const initialMembers: TeamMember[] = [
  { id: 1, name: 'Suleman', role: 'Captain', imageUrl: '/team1.jpeg' },
  { id: 2, name: 'Sheeraz', role: 'Sniper', imageUrl: '/team2.webp' },
  { id: 3, name: 'Umar', role: 'Support', imageUrl: '/team3.webp' },
  { id: 4, name: 'Hafeez', role: 'Assaulter', imageUrl: '/team4.webp' },
];

export default function HomePage() {
  const [selectedFriend, setSelectedFriend] = useState<TeamMember | null>(null);
  const [team, setTeam] = useState<Team | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetch(`http://localhost:3000/team/${teamId}`)
      .then((response) => response.json())
      .then((data) => setTeam(data));
  }, []);

  const handleAddFriend = (member: TeamMember) => {
    setSelectedFriend(member);

    // Construct the URL for adding a friend
    const message = `Hey, I've added you as my friend in our gaming team. Click the link to join: http://localhost:3000/invite/${teamId}/${member.id}`;

    // Detect if the user is on mobile or desktop
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    // Define URLs based on device type
    const pubgURL = isMobile
      ? `https://play.google.com/store/apps/details?id=com.pubg.imobile` // Redirect to PUBG app store page for mobile
      : `https://pubg.com`; // Redirect to PUBG website for desktop

    // Open PUBG link in a new tab
    window.open(pubgURL, '_blank');

    // Optionally redirect to a confirmation page
    router.push('/'); // Redirect to a confirmation page on your website
  };

  return (
    <div className="teams bg-[#0a0b47] text-white min-h-screen py-16" id='teams'>
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-bold text-center mb-16 tracking-wider">Choose Your Friend</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {initialMembers.map((member) => (
            <div
              key={member.id}
              className={`bg-[#1e1f57] p-6 rounded-lg shadow-lg text-center ${
                team?.members.includes(member.id) ? 'border-4 border-[#00ff00]' : ''
              }`}
            >
              <Image
                src={member.imageUrl}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4 border-4 border-[#ff4500]"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-[#ff4500]">{member.role}</p>
              <button
                onClick={() => handleAddFriend(member)}
                className="mt-4 bg-[#ff4500] text-white py-2 px-4 rounded-full hover:bg-[#ff6500] transition-colors"
              >
                Add Friend
              </button>
              {team?.members.includes(member.id) && (
                <p className="mt-4 text-[#00ff00]">Joined</p>
              )}
            </div>
          ))}
        </div>
        {selectedFriend && (
          <div className="mt-12 text-center">
            <h2 className="text-4xl font-bold">You have selected: {selectedFriend.name}</h2>
          </div>
        )}
      </div>
    </div>
  );
}
