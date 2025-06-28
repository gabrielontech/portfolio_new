import React from 'react';
import './globals.css';

export const metadata = {
  title: 'SaaS MVP Development',
  description: 'Fast, smart, and lean SaaS MVP development for non-technical founders.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        {children}
      </body>
    </html>
  );
}