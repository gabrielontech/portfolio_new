import React from 'react';

const WhyMe = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-700 p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-400 mb-4">Speed</h3>
            <p className="text-gray-300">
              We deliver your MVP quickly, allowing you to test your ideas in the market without delay.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-400 mb-4">Clarity</h3>
            <p className="text-gray-300">
              Our transparent process ensures you know exactly what to expect at every stage of development.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-400 mb-4">Founder Mindset</h3>
            <p className="text-gray-300">
              We understand the challenges of non-technical founders and tailor our approach to meet your needs.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-400 mb-4">Async-Friendly</h3>
            <p className="text-gray-300">
              Our processes are designed to be flexible and asynchronous, making collaboration easy and efficient.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;