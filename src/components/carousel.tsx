// CarouselComponent.tsx
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface ImageItem {
  img: string;
  ename: string;
  date: string;
  desc: string;
  venue: string;
  links: string;
}

interface CarouselComponentProps {
  images: ImageItem[];
}

const CarouselComponent: React.FC<CarouselComponentProps> = ({ images }) => {
  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
        {images.map((item, index) => (
          <div key={index}>
            <img className="h-full" src={item.img} alt={item.ename} />
            <div className="legend">
              <p className="description">{item.ename}</p>
              <p className="description">Date: {item.date}</p>
              <p className="description">Description: {item.desc}</p>
              <p className="description">Venue: {item.venue}</p>
              <a href={item.links} className="text-blue-400 font-bold">
                Register
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
