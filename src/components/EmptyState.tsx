import React from 'react';
import { Link } from 'react-router-dom';

const EmptyState: React.FC<{
  title: string;
  subtitle?: string;
  actionLabel?: string;
  actionHref?: string;
}> = ({ title, subtitle, actionLabel, actionHref }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="rounded-full h-12 w-12 border-b-2 border-gold mb-4 animate-spin" />

      <h2 className="text-2xl font-semibold text-white">{title}</h2>

      {subtitle && <p className="text-gray-400 mt-2">{subtitle}</p>}

      {actionLabel && actionHref && (
        <Link to={actionHref} className="mt-4 text-gold hover:underline">
          {actionLabel}
        </Link>
      )}
    </div>
  );
};

export default EmptyState;
