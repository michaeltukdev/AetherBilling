import React from 'react';

const PageTitle = ({ title, description, children }) => {
  return (
    <div className="md:flex items-end justify-between">
      <div>
        <h1 className="text-xl font-medium">{title}</h1>
        {description && (
          <p className="mt-2 text-sm text-text-medium">{description}</p>
        )}
      </div>

      <div className='flex items-center gap-4 mt-6 md:mt-0'>
        {children}
      </div>
    </div>
  );
};

export default PageTitle;