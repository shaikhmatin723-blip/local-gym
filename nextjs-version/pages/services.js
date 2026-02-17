import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Services() {
  const services = [
    {
      icon: '🏋️',
      title: 'Weight Training',
      description: 'Build strength and muscle with our comprehensive weight training area featuring Olympic platforms, power racks, and premium free weights.',
      features: [
        'Olympic lifting platforms',
        'Power racks and squat stations',
        'Complete dumbbell sets',
        'Specialized strength equipment'
      ]
    },
    {
      icon: '🏃',
      title: 'Cardio Training',
      description: 'Improve your cardiovascular health with our state-of-the-art cardio equipment and high-energy group classes.',
      features: [
        'Premium treadmills and bikes',
        'Rowing machines and ellipticals',
        'HIIT training zones',
        'Virtual training programs'
      ]
    },
    {
      icon: '👨‍💼',
      title: 'Personal Training',
      description: 'Work one-on-one with certified trainers to create personalized workout plans and achieve your specific goals faster.',
      features: [
        'Certified personal trainers',
        'Customized workout plans',
        'Nutrition guidance',
        'Progress tracking'
      ]
    },
    {
      icon: '⚡',
      title: 'CrossFit',
      description: 'Join our CrossFit community for high-intensity functional fitness that builds strength, endurance, and mental toughness.',
      features: [
        'Daily WODs (Workout of the Day)',
        'Certified CrossFit coaches',
        'Competition preparation',
        'Beginner-friendly scaling'
      ]
    },
    {
      icon: '👥',
      title: 'Group Classes',
      description: 'Stay motivated with our diverse group fitness classes led by energetic instructors in a supportive environment.',
      features: [
        'Yoga and Pilates',
        'Spin and cycling classes',
        'Zumba and dance fitness',
        'Boot camp and circuit training'
      ]
    },
    {
      icon: '🧘',
      title: 'Recovery & Wellness',
      description: 'Optimize your recovery with our wellness amenities designed to help your body repair and rejuvenate.',
      features: [
        'Sauna and steam rooms',
        'Massage therapy',
        'Stretching and mobility zones',
        'Cryotherapy sessions'
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Services - F3 Fitness</title>
        <meta name="description" content="Explore our fitness programs and services" />
      </Head>

      <Navbar />

      <section className="py-20 bg-gray-900 min-h-screen pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="text-primary">Programs</span></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive fitness programs designed to meet you wherever you are in your fitness journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-8 hover:bg-gray-700 transition-colors duration-300 transform hover:scale-105">
                <div className="text-primary text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="text-gray-400 space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
