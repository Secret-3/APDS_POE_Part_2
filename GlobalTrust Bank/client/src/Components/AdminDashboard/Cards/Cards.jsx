// C:\Users\Sauraav\Desktop\new_poe\GlobalTrust Bank\client\src\Components\AdminDashboard\Cards\Cards.jsx

import React from "react";
import "./Cards.css";
import { cardsData } from "../Data/Data";  // Updated import path
import Card from "../Card/Card";

const Cards = () => {
  return (
    <div className="Cards">
      {cardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;