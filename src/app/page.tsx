import AboutPage from "./components/ui/about";
import TournamentsPage from "./components/ui/tournament";
import Team from "./components/ui/team";
import ContactPage from "./components/ui/contact";
import HeroSection from "./components/ui/hero";
import SignupPage from "./signup/page";
import LoginPage from "@/app/login/page";
import JoinTournament from "./tournament/page";


export default function Home() {
  return (
    <div className="" >
     <HeroSection />
     <AboutPage/>
     <TournamentsPage/>
     <Team/>
     <ContactPage/>
    </div>
  );
}
