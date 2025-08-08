import React from 'react';

const services = [
  { name: 'Zomato', label: 'Delivery', button: 'Order Now',image:"/MenuItem/zomato.jpg" },
  { name: 'Swiggy', label: 'Delivery', button: 'Order Now',image:"/MenuItem/Swiggy.jpg" },
  { name: 'Magicpin',  label: 'Delivery', button: 'Order Now', image:"/MenuItem/mp.jpg"},
];

const DeliveryOptions = () => {
  
return (
  <>
    <div className="container text-center p-3">
      <h2>🚚 Order Online</h2>
    </div>
    <div className="container text-center p-3">
      {services.map((service, index) => (
        <div
          key={index}
          className="delivery-card"
          style={{ backgroundColor: service.color }}
        >
          <img src={service.image} alt={service.name} className="banner" />
          <h3>{service.name}</h3>
          <p>{service.label}</p>
          <button className="order-button">{service.button}</button>
        </div>
      ))}
    </div>
  </>
);

};

export default DeliveryOptions;
