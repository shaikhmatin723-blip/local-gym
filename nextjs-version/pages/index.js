import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>F3 Fitness - Transform Your Body, Transform Your Life</title>
        <meta name="description" content="Join F3 Fitness and discover your strongest self" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <section className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Gym background"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
        
        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Transform Your <span className="text-primary">Body</span>,<br/>
                Transform Your <span className="text-primary">Life</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join <span className="text-primary font-bold relative">F<span className="text-base absolute -bottom-1 right-2 text-white">3</span></span> Fitness and discover your strongest self. State-of-the-art equipment, expert trainers, and a community that pushes you to exceed your limits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/membership" className="bg-primary hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 transform hover:scale-105">
                  Start Your Journey
                </Link>
                <Link href="/services" className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
                  Explore Programs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
