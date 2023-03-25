import React from "react";

const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, index) => (
        <svg
          key={index}
          className="h-5 w-5 fill-current text-yellow-400"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.69L9.16 8.2L3.86 9.14C2.56 9.35 1.76 10.7 2.36 11.86L6.02 17.07L5.14 22.3C5.04 23.2 5.8 24 6.7 24C6.94 24 7.18 23.93 7.4 23.8L12 20.59L16.6 23.8C16.82 23.93 17.06 24 17.3 24C18.2 24 18.96 23.2 18.86 22.3L18 17.07L21.66 11.86C22.26 10.7 21.46 9.35 20.16 9.14L14.86 8.2L12 2.69Z" />
        </svg>
      ))}
      {halfStar === 1 && (
        <svg
          className="h-5 w-5 fill-current text-yellow-400"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.69L9.16 8.2L3.86 9.14C2.56 9.35 1.76 10.7 2.36 11.86L6.02 17.07L5.14 22.3C5.04 23.2 5.8 24 6.7 24C6.94 24 7.18 23.93 7.4 23.8L12 20.59L16.6 23.8C16.82 23.93 17.06 24 17.3 24C18.2 24 18.96 23.2 18.86 22.3L18 17.07L21.66 11.86C22.26 10.7 21.46 9.35 20.16 9.14L14.86 8.2L12 2.69ZM17.87 9.89L12 7.52L6.13 9.89L5.27 8.12L10.19 5.88L9.45 4.13L12 2.99L14.56 4.13L13.81 5.88L18.73 8.12L17.87 9.89Z" />
        </svg>
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <svg
          key={index}
          className="h-5 w-5 fill-current text-gray-300"
          viewBox="0 0 24 24"
        >
          <path d="M12 2.69L9.16 8.2L3.86 9.14C2.56 9.35 1.76 10.7 2.36 11.86L6.02 17.07L5.14 22.3C5.04 23.2 5.8 24 6.7 24C6.94 24 7.18 23.93 7.4 23.8L12 20.59L16.6 23.8C16.82 23.93 17.06 24 17.3 24C18.2 24 18.96 23.2 18.86 22.3L18 17.07L21.66 11.86C22.26 10.7 21.46 9.35 20.16 9.14L14.86 8.2L12 2.69Z" />
        </svg>
      ))}
    </div>
  );
};

export default Rating;
