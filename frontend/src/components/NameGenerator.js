import React from 'react';

const NameGenerator = (character) => {
  return (
    <div className="flex items-center justify-center w-16 h-16 capitalize transition-all duration-300 rounded-full nameGenerator bg-gradient-to-t from-sky-400 to-cyan-100 hover:shadow-xl hover:scale-105">
      <span className="mt-2 text-5xl text-white">{character}</span>
    </div>
  );
};

export default NameGenerator;
