
import React, { useState } from 'react';
import { SectionContainer, SectionTitle } from '../SectionContainer';
import { EmailIcon } from '../icons';
import { SOCIAL_LINKS } from '../../constants';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you'd send this data to a backend.
    // For this demo, we'll just simulate a submission.
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000); // Reset message after 5s
  };

  return (
    <SectionContainer id="contact" ariaLabelledBy="contact-title">
      <SectionTitle icon={<EmailIcon className="w-8 h-8" />}><span id="contact-title">Get In Touch</span></SectionTitle>
      <div className="max-w-2xl mx-auto bg-dark-card p-8 md:p-12 rounded-xl shadow-2xl border border-slate-700">
        <p className="text-center text-dark-text-secondary mb-8">
          Have a project in mind, a question, or just want to say hi? Feel free to reach out!
        </p>
        {isSubmitted && (
          <div className="mb-6 p-4 text-center text-green-300 bg-green-800/50 border border-green-700 rounded-md">
            Thank you for your message! I'll get back to you soon.
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary outline-none transition-colors"
              placeholder="Your message..."
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-brand-primary hover:bg-sky-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-dark-card"
            >
              Send Message
            </button>
          </div>
        </form>
        <div className="mt-12 text-center">
          <p className="text-dark-text-secondary mb-4">Or connect with me on:</p>
          <div className="flex justify-center space-x-6">
            {SOCIAL_LINKS.map(link => {
              // FIX: Render icon component directly instead of using React.cloneElement
              const IconComponent = link.icon;
              return (
               <a 
                key={link.name} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={link.name}
                className="text-slate-400 hover:text-brand-primary transition-colors duration-200 transform hover:scale-110"
              >
                {/* FIX: Render IconComponent with desired className. Original cloneElement used w-8 h-8. */}
                {IconComponent && <IconComponent className="w-8 h-8" />}
              </a>
              );
            })}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};