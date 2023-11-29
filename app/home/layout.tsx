import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen bg-purple-100 flex flex-col justify-between">
      <Navbar />

      <section className="w-full h-auto flex items-center justify-center">
        {children}
      </section>

      <Footer />
    </div>
  );
}
