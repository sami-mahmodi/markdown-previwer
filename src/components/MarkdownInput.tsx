import React from 'react';

const MarkdownInput: React.FC<{ value: string; onChange: (value: string) => void }> = ({ value, onChange }) => {
  return (
    <div className="p-12 w-full ">
      <textarea
        className="w-full h-80 p-2 border  rounded-md outline-none bg-emerald-900 text-white text-xl"
        placeholder='Write Your Markdown Here!'
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default MarkdownInput;
