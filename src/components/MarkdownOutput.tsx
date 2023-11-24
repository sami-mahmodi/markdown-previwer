import React from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownOutput: React.FC<{ markdown: string }> = ({ markdown }) => {
  return (
    <div className='p-12 w/12'>
    <div className="p-2 border border-black h-80  rounded-md bg-slate-700">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
    </div>
  );
};

export default MarkdownOutput;
