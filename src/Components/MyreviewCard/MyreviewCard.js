import React from 'react';

const MyreviewCard = ({user}) => {
    const { name, review, star} = user;
    return (
        <div class="card w-96 bg-neutral text-neutral-content">
        <div class="card-body items-center text-center">
          <h2 class="text-2xl">{name}</h2>
          <p>{star}</p>
          <p>{review}</p>
          <div class="card-actions justify-end">
          </div>
        </div>
      </div>
    );
};

export default MyreviewCard;