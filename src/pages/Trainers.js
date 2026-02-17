import React from 'react';

const Trainers = () => {
  const trainers = [
    {
      initials: 'MS',
      name: 'Mike Stevens',
      role: 'Head Trainer & CrossFit Coach',
      experience: '8 years experience',
      description: 'Former competitive powerlifter with expertise in strength training and CrossFit methodology. Specializes in helping athletes reach peak performance.'
    },
    {
      initials: 'SJ',
      name: 'Sarah Johnson',
      role: 'Yoga & Wellness Instructor',
      experience: '6 years experience',
      description: 'Certified yoga instructor and wellness coach focused on mind-body connection, flexibility, and stress reduction through movement.'
    },
    {
      initials: 'DR',
      name: 'David Rodriguez',
      role: 'Personal Trainer & Nutritionist',
      experience: '10 years experience',
      description: 'Combines personal training with nutrition expertise to create comprehensive lifestyle transformations for weight loss and muscle building.'
    },
    {
      initials: 'AL',
      name: 'Amanda Lee',
      role: 'HIIT & Group Fitness Instructor',
      experience: '5 years experience',
      description: 'High-energy group fitness instructor specializing in HIIT, boot camp, and dance fitness classes that make working out fun and effective.'
    }
  ];

  return (
    <section className="py-20 bg-gray-900 min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Our <span className="text-primary">Trainers</span></h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our certified trainers bring years of experience and passion to help you achieve your fitness goals safely and effectively.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-colors duration-300 transform hover:scale-105">
              <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                {trainer.initials}
              </div>
              <h3 className="text-xl font-bold mb-2">{trainer.name}</h3>
              <p className="text-primary font-semibold mb-3">{trainer.role}</p>
              <p className="text-gray-300 text-sm mb-4">{trainer.experience}</p>
              <p className="text-gray-400 text-sm">{trainer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
