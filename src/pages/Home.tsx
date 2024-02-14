import EventItems from "@/components/EventItems";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <EventItems />

      <Reviews />
    </main>
  );
};

export default Home;
