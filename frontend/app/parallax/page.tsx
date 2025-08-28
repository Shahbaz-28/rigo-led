import CardParallaxContainer from '@/components/CardParallaxContainer';
import Navbar from '@/components/navbar';

export default function ParallaxPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="pt-20">
        <CardParallaxContainer />
      </div>
    </div>
  );
}
