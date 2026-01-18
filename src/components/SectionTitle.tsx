import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-5xl font-serif font-bold text-vinhomes-navy">{title}</h2>
      <p className="text-lg text-vinhomes-gray mt-4 max-w-3xl mx-auto">{subtitle}</p>
      <div className="flex justify-center mt-6">
        <div className="w-24 h-1 bg-vinhomes-orange rounded-full"></div>
      </div>
    </div>
  );
};

export default SectionTitle;
