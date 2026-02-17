import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    // Success message
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section className="py-20 bg-gray-900 min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In <span className="text-primary">Touch</span></h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your fitness journey? Contact us today for a free consultation and gym tour.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-primary text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-primary text-white"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-primary text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-primary text-white resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Visit Our Gym</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-primary text-2xl mr-4">📍</div>
                  <div>
                    <h4 className="font-bold mb-2">Address</h4>
                    <p className="text-gray-300">
                      1234 Fitness Boulevard<br/>
                      Downtown District<br/>
                      Metro City, MC 12345
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary text-2xl mr-4">📞</div>
                  <div>
                    <h4 className="font-bold mb-2">Phone</h4>
                    <p className="text-gray-300">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary text-2xl mr-4">✉️</div>
                  <div>
                    <h4 className="font-bold mb-2">Email</h4>
                    <p className="text-gray-300">info@f3fitness.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-primary text-2xl mr-4">🕒</div>
                  <div>
                    <h4 className="font-bold mb-2">Hours</h4>
                    <div className="text-gray-300 space-y-1">
                      <p>Monday - Friday: 24 Hours</p>
                      <p>Saturday - Sunday: 24 Hours</p>
                      <p className="text-sm text-primary">Staffed hours: 6 AM - 10 PM daily</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 text-2xl">📘</a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 text-2xl">📷</a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 text-2xl">🐦</a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 text-2xl">📺</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
