"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const HeroSection = () => {
  const router = useRouter();

  const handleJoinTournamentClick = () => {
    router.push('/tournament');
  };

  return (
    <section className="relative w-full h-screen bg-[#0a0b47] text-white flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/background.jpeg"
          alt="Tournament Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="object-center"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 text-center px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Join the Ultimate Tournament
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Compete against the best, win exciting prizes, and show off your skills in our epic tournaments.
        </p>
        <button
          onClick={handleJoinTournamentClick}
          className="inline-block px-8 py-4 text-lg font-medium text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Join Tournament
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
