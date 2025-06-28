import React from 'react';

const CaseStudies = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-3xl font-bold mb-8 text-center">
          Upcoming Case Studies
        </h2>
        <p className="text-gray-400 text-lg mb-12 text-center">
          Stay tuned for our exciting projects that showcase our expertise in SaaS MVP development.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder for case studies */}
          <div className="bg-gray-700 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-2">Project Title 1</h3>
            <p className="text-gray-300">Brief description of the project and its impact.</p>
          </div>
          <div className="bg-gray-700 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-2">Project Title 2</h3>
            <p className="text-gray-300">Brief description of the project and its impact.</p>
          </div>
          <div className="bg-gray-700 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-2">Project Title 3</h3>
            <p className="text-gray-300">Brief description of the project and its impact.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;