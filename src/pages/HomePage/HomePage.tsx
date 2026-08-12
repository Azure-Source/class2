import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import MembersSection from './sections/MembersSection';
import NewsSection from './sections/NewsSection';
import GallerySection from './sections/GallerySection';
import ScheduleSection from './sections/ScheduleSection';
import HonorsSection from './sections/HonorsSection';
import GuestbookSection from './sections/GuestbookSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <MembersSection />
        <NewsSection />
        <GallerySection />
        <ScheduleSection />
        <HonorsSection />
        <GuestbookSection />
      </main>
      <Footer />
    </div>
  );
}
