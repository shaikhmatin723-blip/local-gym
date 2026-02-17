import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-gray-800 min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-primary relative">F<span className="text-2xl md:text-3xl absolute -bottom-1 right-2 text-white">3</span></span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Founded in 2015, <span className="text-primary font-bold relative">F<span className="text-base absolute -bottom-1 right-2 text-white">3</span></span> Fitness has been the premier destination for serious fitness enthusiasts in our community.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">Our Mission</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We believe fitness is more than just physical transformation—it's about building mental resilience, creating lasting habits, and fostering a supportive community. Our mission is to provide every member with the tools, knowledge, and motivation needed to achieve their personal best.
            </p>
            <p className="text-gray-300 leading-relaxed">
              With over 15,000 square feet of premium equipment, certified personal trainers, and diverse group classes, we've helped thousands of members reach their fitness goals and maintain healthy lifestyles.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary mb-2">2,500+</div>
              <div className="text-gray-300">Active Members</div>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary mb-2">15</div>
              <div className="text-gray-300">Expert Trainers</div>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-300">Group Classes</div>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-300">Access Hours</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
