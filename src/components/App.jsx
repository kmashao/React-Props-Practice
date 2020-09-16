import React from "react";
import Contacts from "../contacts";
import Card from "./Card";

function App() {
  let cards = [];

  Contacts.forEach((contact) => {
    cards.push(
      <Card
        name={contact.name}
        imgURL={contact.imgURL}
        phone={contact.phone}
        email={contact.email}
      />
    );
  });

  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      {cards}
    </div>
  );
}

export default App;
