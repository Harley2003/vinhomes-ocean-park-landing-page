import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Highlights from '@/components/Highlights';
import Overview from '@/components/Overview';
import ApartmentTypes from '@/components/ApartmentTypes';
import Amenities from '@/components/Amenities';
import Location from '@/components/Location';
import Pricing from '@/components/Pricing';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <Highlights />
      <Overview />
      <ApartmentTypes />
      <Amenities />
      <Location />
      <Pricing />
      <LeadForm />
      <Footer />
    </main>
  );
}
