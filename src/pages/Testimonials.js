import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      initials: 'JM',
      name: 'Jessica Martinez',
      memberSince: 'Member since 2022',
      text: 'completely changed my relationship with fitness. The trainers are incredibly knowledgeable and supportive. I\'ve lost 35 pounds and gained so much confidence. The community here is like family.',
      rating: 5
    },
    {
      initials: 'RT',
      name: 'Robert Thompson',
      memberSince: 'Member since 2021',
      text: 'As a busy executive, I needed a gym that worked with my schedule. The 24/7 access and variety of equipment means I can always get a great workout, whether it\'s 6 AM or 10 PM.',
      rating: 5
    },
    {
      initials: 'LC',
      name: 'Lisa Chen',
      memberSince: 'Member since 2023',
      text: 'The CrossFit program here is outstanding. Coach Mike pushed me to compete in my first competition last year, and I placed 3rd in my division! The programming and coaching are top-notch.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-800 min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Members <span className="text-primary">Say</span></h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real stories from real people who have transformed their lives at <span className="text-primary font-bold relative">F<span className="text-sm absolute -bottom-1 right-2 text-white">3</span></span> Fitness.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.memberSince}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                "<span className="text-primary font-bold relative">F<span className="text-sm absolute -bottom-1 right-2 text-white">3</span></span> {testimonial.text}"
              </p>
              <div className="flex text-primary">
                {'★'.repeat(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
