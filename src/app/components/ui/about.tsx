import Image from 'next/image';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="about bg-[#141983] min-h-screen py-12 px-6 md:px-12" id='about'>
      <div className="max-w-7xl mx-auto">
        {/* Hero Section for About Page */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-white">
            We are dedicated to creating the most exciting and competitive tournaments in the gaming world.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-lg text-white">
                At [Pubg Tournament], our mission is to bring together gamers from around the world to compete in thrilling tournaments. We aim to provide a platform that fosters competition, community, and fun.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image
                src={require("../../../../public/mission.jpeg")} // Replace with your image path
                alt="Our Mission"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-bold text-white text-center mb-8">Meet the Team</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Team Member 1 */}
            <div className="w-full md:w-1/3 p-4 bg-[#2d2de9] rounded-lg shadow-lg text-center">
              <Image
                src={require("../../../../public/member1.jpg")} // Replace with your image path
                alt="Team Member 1"
                width={200}
                height={200}
                className="mx-auto rounded-full"
              />
              <h3 className="text-xl font-semibold mt-4 text-white">Suleman Shahjahan</h3>
              <p className="text-white">Admin & Founder</p>
            </div>
            {/* Team Member 2 */}
            <div className="w-full md:w-1/3 p-4 bg-[#2d2de9] rounded-lg shadow-lg text-center">
              <Image
                src={require("../../../../public/memvber2.jpg")} // Replace with your image path
                alt="Team Member 2"
                width={200}
                height={200}
                className="mx-auto rounded-full"
              />
              <h3 className="text-xl font-semibold mt-4 text-white">Bilal Shahjahan</h3>
              <p className="text-white">Tournament Director</p>
            </div>
            {/* Team Member 3 */}
            <div className="w-full md:w-1/3 p-4 bg-[#2d2de9] rounded-lg shadow-lg text-center">
              <Image
                src={require("../../../../public/member3.jpg")} // Replace with your image path
                alt="Team Member 3"
                width={200}
                height={200}
                className="mx-auto rounded-full h-30"
              />
              <h3 className="text-xl font-semibold mt-4 text-white">Hafeez Baloch</h3>
              <p className="text-white">Community Manager</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mt-12">
          <h2 className="text-3xl font-bold text-white mb-4">Get Involved</h2>
          <p className="text-lg text-white mb-6">
            Join us in our mission to create the best gaming experiences. Whether you want to participate, sponsor, or simply learn more, we&apos;re excited to hear from you!
          </p>
          <Link href="#contact">
            <Link href={"#contact"} className="inline-block px-8 py-4 text-lg font-medium text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Contact Us
            </Link>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
