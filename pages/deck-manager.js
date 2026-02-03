import Metadata from '../components/Metadata';
import AppNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import DeckManager from '../components/DeckManager';

export default function DeckManagerPage() {
  return (
    <>
      <Metadata title="Quản lý bộ bài Tarot" description="Chọn và thay đổi bộ bài mặc định cho trải nghiệm bói bài." />
      <AppNavbar />
      <main className="min-h-[60vh] bg-[#181818] py-10">
        <DeckManager />
      </main>
      <Footer />
    </>
  );
}
