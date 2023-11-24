import React from 'react';

const MarkdownGuide: React.FC<{ showGuide: boolean }> = ({ showGuide }) => {
  return (
    showGuide && (
      <div className="p-12 w-full bg-emerald-500 text-white text-xl">
        <h2 className="text-lg font-bold mb-2">Markdown Guide</h2>
        <ul className="list-disc pl-4">
          <li>*Italic*</li>
          <li># Heading1</li>
          <li>## Heading2</li>
          <li>[Link](http://a.com)</li>
          <li>![Image](http://url/a.png)</li>
        </ul>
      </div>
    )
  );
};

export default MarkdownGuide;
