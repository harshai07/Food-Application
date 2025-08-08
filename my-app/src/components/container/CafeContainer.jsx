import React, { useState } from 'react';
import MenuItem from "../MenuItem/MenuItem";
import DeliveryOptions from '../DeliveryOptions/DeliveryOptions';
import CartSummary from "../CartSummary/CartSummary";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const CafeContainer = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  const menuItems = [
    { id: 1, name: 'Espresso', price: 120, image: "/MenuItem/Espresso.jpeg" },
    { id: 2, name: 'Cappuccino', price: 150, image: "/MenuItem/Cappuccino.jpg" },
    { id: 3, name: 'Blueberry Muffin', price: 90, image: "/MenuItem/Muffin.jpg" },
    { id: 4, name: 'Croissant', price: 100, image: '/MenuItem/Croissant.jpg' },
  ];

  return (
    <div className="cafe-container">
      <h1>☕ Welcome to Meteor Café</h1>
       {/* Bakery Story Section */}
      <div className="bakery-body">
        <div className="bakery-image-section">
          <img src="/MenuItem/Bakery.jpg" alt="Meteor Café Story" className="bakery-image" />
        </div>
        <div className="bakery-story-section">
          <h2>🍞 Our Story</h2>
          <p>
            Iyengars Bakery dates back to its humble beginnings in 1981. The store opened on 1st May
            in a small 10x10 outlet and has emerged into an iconic bakery. The success lies in the
            fundamentals which we believe is to provide best value to customers through our products.
          </p>
        </div>
      </div>

      {/* Menu Carousel */}
      <div className="menu-carousel">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {menuItems.map((item) => (
            <SwiperSlide key={item.id}>
              <MenuItem item={item} onAdd={handleAddToCart} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

  <DeliveryOptions />

<div className="cart-sticky">
  <CartSummary cart={cart} setCart={setCart} />
</div>
    </div>
  );
};

export default CafeContainer;
