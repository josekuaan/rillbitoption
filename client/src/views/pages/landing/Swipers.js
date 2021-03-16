import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import Lucie from "../../../assets/testimony/Lucie.jpeg";
import Ivelina from "../../../assets/testimony/Ivelina.jpeg";
import Daniela from "../../../assets/testimony/Daniela.jpeg";
import Matin from "../../../assets/testimony/Matin.jpeg";
import Jolana from "../../../assets/testimony/Jolana.jpeg";
import alenxandra from "../../../assets/testimony/alenxandra.jpeg";
export default function Swipers() {
  const data = [
    {
      id: 1,
      url: Ivelina,
      username: "Ivelina ivanova",
      text:
        "My name is Ivelina ivanova and i want to quickly day a big thank you to Monica Rodriguez and to the company (Rillbit) that helped me in a way that nobody has ever done.",
    },
    {
      id: 2,
      url: Matin,
      username: "Matin bezak",
      text:
        "I am now a debt free man and also to Monica who gave me a new habit and talking me out of making a mess out of my self by drinking. Gratitude to you(Monica Rodriguez).",
    },
    {
      id: 3,
      url: Lucie,
      username: "Lucie anna",
      text:
        "This platform is really one of the best out there, Since i started investing with Rillbit i realized that life is not all about spending and depending on a monthly income.",
    },
    {
      id: 4,
      url: Daniela,
      username: "Daniela pavla",
      text:
        "A big thanks to Rillbitoption, His small team have made an effort to get to the world via any means possible and service we receive feels very personal.",
    },
    {
      id: 5,
      url: Jolana,
      username: "Jolana vargova",
      text:
        "Jeremy has helped us to focus on what we want out of life and is helping us realise our plans. The peace of mind we have from knowing our finances is priceless.",
    },
    {
      id: 6,
      url: alenxandra,
      username: "Alexandr",
      text:
        " We greatly value the interest that Jeremy takes in our lives and making us very familiar with crypto currency we can't thank you enough",
    },
  ];
  return (
    <Swiper
      spaceBetween={50}
      navigation
      pagination={{ clickable: true }}
      //   scrollbar={{ draggable: true }}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map((user) => (
        <SwiperSlide key={user.id}>
          <div className="imag-container">
            <img src={user.url} alt="user" />
          </div>
          <h3 className="user-name">{user.username}</h3>
          <div className="user-text">{user.text}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
