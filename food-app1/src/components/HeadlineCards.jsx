import React from 'react';
const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      {[
        {
          title: "Sun's Out, BOGO's Out",
          subtitle: 'Through 8/26',
          img: 'https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        },
        {
          title: 'New Restaurants',
          subtitle: 'Added Daily',
          img: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        },
        {
          title: 'We Deliver Desserts Too',
          subtitle: 'Tasty Treats',
          img: 'https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        },
      ].map((card, index) => (
        <div key={index} className='rounded-xl relative overflow-hidden shadow-lg group'>
          {/* Overlay */}
          <div className='absolute w-full h-full bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-xl text-white flex flex-col justify-between p-4 transition duration-300 group-hover:bg-black/80'>
            <div>
              <p className='font-bold text-2xl'>{card.title}</p>
              <p className='text-sm'>{card.subtitle}</p>
            </div>
            <button className='mt-4 self-start px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold rounded-full shadow-md hover:scale-105 transition duration-300'>
              🍽️ Order Now
            </button>
          </div>
          <img
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300'
            src={card.img}
            alt='/'
          />
        </div>
      ))}
    </div>
  );
};
export default HeadlineCards;
