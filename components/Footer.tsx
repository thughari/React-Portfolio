
import React from 'react';
import { MY_NAME } from '../constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-dark-text-secondary">
          &copy; {currentYear} {MY_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
