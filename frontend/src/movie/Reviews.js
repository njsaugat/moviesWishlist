import React from 'react';
const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';

const Reviews = ({ reviews, showItems }) => {
  console.log(reviews);
  return (
    <div className="flex flex-col w-screen gap-y-5">
      {reviews.map((review, index) => {
        let imageAvailable =
          review.author_details.avatar_path &&
          !review.author_details?.avatar_path.includes('http');
        console.log(imageAvailable);
        return (
          index < showItems && (
            <div className="flex gap-4" key={review.id}>
              <div className=" left">
                {imageAvailable ? (
                  <div className="w-8 h-8 rounded-full md:w-10 md:h-10 ">
                    <img
                      src={IMAGE_URL + review.author_details.avatar_path}
                      alt=""
                      className="object-cover w-full h-full rounded-full"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-8 h-8 capitalize transition-all duration-300 rounded-full md:w-10 md:h-10 nameGenerator bg-gradient-to-t from-purple-200 to-purple-500 hover:shadow-xl hover:scale-105">
                    <span className="text-2xl text-white ">
                      {review.author_details.name.charAt(0) ||
                        review.author_details.username.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex flex-col w-10/12 pr-10 right">
                <div className="text-xl font-bold">
                  {review.author_details.name}
                </div>
                <div className="text-slate-300 ">
                  {' '}
                  @{review.author_details.username}
                </div>
                <div className="text-sm">
                  <span className="transition-all duration-300 ease-in-out review-content ">
                    {review.content.substring(0, 100) + '...'}
                  </span>
                  <button
                    className="pl-3 text-base text-transparent transition-all bg-clip-text bg-gradient-to-r from-purple-200 to-purple-500 hover:font-bold"
                    onClick={(e) => {
                      console.log(e.target);
                      if (e.target.innerText.trim() === 'Show More') {
                        document.querySelectorAll('.review-content')[
                          index
                        ].innerText = review.content;
                        e.target.innerText = 'Show Less';
                      } else if (e.target.innerText.trim() === 'Show Less') {
                        document.querySelectorAll('.review-content')[
                          index
                        ].innerText = review.content.substring(0, 100) + '...';
                        e.target.innerText = 'Show More';
                      }
                    }}
                  >
                    Show More
                  </button>
                </div>
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default Reviews;
