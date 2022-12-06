import React from 'react';

const YoutubeEmbed = ({ videoId }) => {
  return (
    <div className="relative h-0 mt-20 mb-10 overflow-hidden video-responsive">
      <iframe
        className="absolute w-11/12 h-full rounded-lg l-0 t-0"
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export default YoutubeEmbed;
