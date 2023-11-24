import React from 'react';

const Header: React.FC<{ onToggleGuide: () => void }> = ({ onToggleGuide }) => {
  return (
    <div className="bg-emerald-700 p-12 w-full flex justify-between ">
      <div className="text-white text-2xl">Markdown Previewer</div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onToggleGuide}>
        Toggle Guide
      </button>
    </div>
  );
};

export default Header;
