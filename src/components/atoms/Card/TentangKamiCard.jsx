import React from 'react';

const TentangKamiCard = ({ title, content }) => {
  return (
    <div>
      <div className="bg-gray-100 p-8">
      <p className="text-xl font-bold text-black mt-8 mb-4">{title}</p>
      <div className="text-sm pl-4">
        <ul className="list-disc">
          {content.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
}

export default TentangKamiCard;