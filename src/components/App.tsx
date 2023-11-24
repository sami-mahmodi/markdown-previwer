'use client'
import React, { useState } from 'react';
import Header from './Header';
import MarkdownGuide from './MarkdownGuide';
import MarkdownInput from './MarkdownInput';
import MarkdownOutput from './MarkdownOutput';

const App: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>('# Hello World');
  const [showGuide, setShowGuide] = useState<boolean>(false);

  const handleToggleGuide = () => {
    setShowGuide(!showGuide);
  };

  return (
    <div className='w-full min-h-screen'>
      <Header onToggleGuide={handleToggleGuide} />
      <MarkdownGuide showGuide={showGuide} />
      <div className="flex">
        <MarkdownInput value={markdown} onChange={(value) => setMarkdown(value)} />
        <MarkdownOutput markdown={markdown} />
      </div>
    </div>
  );
};

export default App;
