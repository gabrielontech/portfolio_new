import React from 'react';

const WhyMe = () => {
  return (
    <section className="py-20  relative overflow-hidden">
      {/* Futuristic background shapes */}
     
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-purple-400 via-blue-400 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
          Working with me means:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              title: 'Speed',
              desc: 'I deliver your MVP quickly, allowing you to test your ideas in the market without delay.',
              color: 'from-indigo-500 to-blue-500'
            },
            {
              title: 'Clarity',
              desc: 'My transparent process ensures you know exactly what to expect at every stage of development.',
              color: 'from-pink-500 to-purple-500'
            },
            {
              title: 'Founder Mindset',
              desc: 'I understand the challenges of non-technical founders and tailor my approach to meet your needs.',
              color: 'from-green-400 to-cyan-400'
            },
            {
              title: 'Async-Friendly',
              desc: 'My processes are designed to be flexible and asynchronous, making collaboration easy and efficient.',
              color: 'from-yellow-400 to-orange-400'
            }
          ].map((item, idx) => (
            <div
              key={item.title}
              className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8 transition-transform hover:scale-105 hover:shadow-indigo-500/40 relative group`}
              style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
            >
              <div className={`absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br ${item.color} opacity-30 blur-xl group-hover:opacity-60 transition-opacity`}></div>
              <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${item.color} bg-clip-text text-transparent drop-shadow`}>
                {item.title}
              </h3>
              <p className="text-gray-200">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;