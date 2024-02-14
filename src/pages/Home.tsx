import EventItems from "@/components/EventItems";
import Hero from "@/components/Hero";
import Pricings from "@/components/Pricings";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <EventItems />
      <Pricings />

      <Reviews />
    </main>
  );
};

export default Home;
