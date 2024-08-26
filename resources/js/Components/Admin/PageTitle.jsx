import React from 'react';
import CreateLink from '../ui/Buttons/CreateButton';
import { hasPermission } from '../../Utils/hasPermission';

const PageTitle = ({ title, description, createLinkProps }) => {
  return (
    <div className="flex items-end justify-between">
      <div>
        <h1 className="text-xl font-medium">{title}</h1>
        {description && (
          <p className="mt-2 text-sm text-text-medium">{description}</p>
        )}
      </div>

      {createLinkProps && (!createLinkProps.permission || hasPermission(createLinkProps.permission)) && (
        <CreateLink text={createLinkProps.text} href={createLinkProps.href} />
      )}
    </div>
  );
};

export default PageTitle;