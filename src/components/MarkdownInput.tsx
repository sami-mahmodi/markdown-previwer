import React from 'react';

const MarkdownInput: React.FC<{ value: string; onChange: (value: string) => void }> = ({ value, onChange }) => {
  return (
    <div className="p-12 w-1/2">
      <textarea
        className="w-full h-80 p-2 border border-gray-300 rounded-md "
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default MarkdownInput;
