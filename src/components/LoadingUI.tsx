import React from 'react';

const LoadingUI: React.FC<{ message?: string }> = ({ message = 'Loading...' }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold mb-4" />
      <p className="text-muted-foreground">{message}</p>
    </div>
  );
};

export default LoadingUI;
