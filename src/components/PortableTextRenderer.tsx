import { PortableText } from '@portabletext/react';

const PortableTextRenderer = ({ blocks }) => {
  // Handle plain text content
  if (typeof blocks === 'string') {
    return (
      <div className="prose prose-lg max-w-none">
        <p className="mb-4 text-gray-700 leading-relaxed whitespace-pre-wrap">{blocks}</p>
      </div>
    );
  }

  // Handle PortableText array
  if (!blocks || !Array.isArray(blocks)) {
    return <p className="text-gray-500">No content available.</p>;
  }

  return (
    <div className="prose prose-lg max-w-none">
      <PortableText 
        value={blocks}
        components={{
          block: {
            normal: ({ children }) => <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>,
            h1: ({ children }) => <h1 className="text-3xl font-bold mb-4 text-gray-900">{children}</h1>,
            h2: ({ children }) => <h2 className="text-2xl font-bold mb-3 text-gray-900">{children}</h2>,
            h3: ({ children }) => <h3 className="text-xl font-bold mb-2 text-gray-900">{children}</h3>,
          },
          list: {
            bullet: ({ children }) => <ul className="list-disc list-inside mb-4 text-gray-700">{children}</ul>,
            number: ({ children }) => <ol className="list-decimal list-inside mb-4 text-gray-700">{children}</ol>,
          },
          listItem: {
            bullet: ({ children }) => <li className="mb-1">{children}</li>,
            number: ({ children }) => <li className="mb-1">{children}</li>,
          },
        }}
      />
    </div>
  );
};

export default PortableTextRenderer;
