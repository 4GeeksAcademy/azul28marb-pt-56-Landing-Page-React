import React from "react";

const CardItem = ({ image, title, text, link }) => {
  return (
    <div className="card" style={{ width: "300px" }}>
        <img 
        src={image} className="card-img-top fixed-img" 
        alt={title} 
        style={{ width: '298px', height: '325px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column align-content-center flex-wrap ">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p> 
        </div>
        <div class="card-footer d-flex justify-content-center">
            <a href={link} className="btn btn-primary">Find Out More!</a>
        </div>
    </div>
  );
};
/*
*/

const Card = () => {
  const cardData = [
    {
      image: "https://images.unsplash.com/photo-1605026508739-95cee5221e14?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Card 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      link: "#"
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1729542103282-87a286ae45fd?q=80&w=727&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Card 2",
      text: "Tempore et ad doloribus, enim quos quasi impedit laborum officiis vitae reiciendis eaque?",
      link: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1757159623175-c94243f0f2da?q=80&w=683&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Card 3",
      text: "Eius possimus ipsum quaerat molestias quia!",
      link: "#"
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1668966549731-d42393bfed7a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Card 4",
      text: "Cumque, explicabo dicta.",
      link: "#"
    }
  ];

  return (
    <div className="container">
      <div className="d-flex flex-wrap justify-content-between">
        {cardData.map((item, index) => (
          <CardItem
            key={index}
            image={item.image}
            title={item.title}
            text={item.text}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;