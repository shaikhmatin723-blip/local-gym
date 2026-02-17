import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Membership() {
  const plans = [
    {
      name: 'Basic',
      price: '$29',
      features: [
        { included: true, text: '24/7 gym access' },
        { included: true, text: 'Cardio and weight equipment' },
        { included: true, text: 'Locker room access' },
        { included: true, text: 'Free fitness assessment' },
        { included: false, text: 'Group classes' },
        { included: false, text: 'Personal training discount' }
      ],
      popular: false
    },
    {
      name: 'Standard',
      price: '$49',
      features: [
        { included: true, text: 'Everything in Basic' },
        { included: true, text: 'Unlimited group classes' },
        { included: true, text: 'Sauna and steam room' },
        { included: true, text: 'Guest passes (2 per month)' },
        { included: true, text: '10% off personal training' },
        { included: true, text: 'Nutrition consultation' }
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: '$79',
      features: [
        { included: true, text: 'Everything in Standard' },
        { included: true, text: 'Unlimited guest passes' },
        { included: true, text: 'Priority class booking' },
        { included: true, text: '25% off personal training' },
        { included: true, text: 'Massage therapy discount' },
        { included: true, text: 'VIP locker room access' }
      ],
      popular: false
    }
  ];

  return (
    <>
      <Head>
        <title>Membership Plans - F3 Fitness</title>
        <meta name="description" content="Choose your membership plan" />
      </Head>

      <Navbar />

      <section className="py-20 bg-gray-800 min-h-screen pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Membership <span className="text-primary">Plans</span></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the membership that fits your lifestyle and fitness goals. All plans include access to our premium facilities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`bg-gray-900 rounded-lg p-8 ${plan.popular ? 'border-2 border-primary relative transform scale-105' : 'border border-gray-700'} hover:border-primary transition-colors duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="text-4xl font-bold text-primary mb-2">{plan.price}</div>
                  <div className="text-gray-400">per month</div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className={`${feature.included ? 'text-primary' : 'text-gray-500'} mr-3`}>
                        {feature.included ? '✓' : '✗'}
                      </span>
                      <span className={feature.included ? '' : 'text-gray-500'}>{feature.text}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full ${plan.popular ? 'bg-primary hover:bg-orange-600' : 'bg-gray-700 hover:bg-primary'} text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300`}>
                  Choose {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
