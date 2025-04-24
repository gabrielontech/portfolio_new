import React from 'react';

interface BrowserFrameProps {
  children: React.ReactNode;
}

const BrowserFrame: React.FC<BrowserFrameProps> = ({ children }) => {
  return (
    <div className="rounded-t-xl bg-gray-100 flex flex-col h-full">
      {/* Browser Bar */}
      <div className="h-12 bg-gray-100 border-b border-gray-200 flex items-center px-4 flex-shrink-0">
        {/* Traffic Lights */}
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        {/* URL Bar */}
        <div className="ml-4 flex-1 max-w-xl">
          <div className="bg-white h-7 rounded-md flex items-center px-3">
            <div className="w-4 h-4 rounded-full bg-gray-200 mr-2"></div>
            <div className="h-3 bg-gray-200 rounded flex-1"></div>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="flex-1 overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default BrowserFrame; 