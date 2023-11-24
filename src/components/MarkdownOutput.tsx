import React from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownOutput: React.FC<{ markdown: string }> = ({ markdown }) => {
  return (
    <div className='p-12 w-full'>
    <div className="p-2 border border-white h-80  rounded-md bg-emerald-900 text-white text-xl">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
    </div>
  );
};

export default MarkdownOutput;
