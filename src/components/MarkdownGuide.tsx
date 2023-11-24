import React from 'react';

const MarkdownGuide: React.FC<{ showGuide: boolean }> = ({ showGuide }) => {
  return (
    showGuide && (
      <div className="p-12 w-full">
        <h2 className="text-lg font-bold mb-2">Markdown Guide</h2>
        <ul className="list-disc pl-4">
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </div>
    )
  );
};

export default MarkdownGuide;
