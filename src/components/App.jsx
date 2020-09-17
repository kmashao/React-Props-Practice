import React from "react";
import Contacts from "../contacts";
import Card from "./Card";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      id={contact.id}
      name={contact.name}
      imgURL={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  );
}

// Contacts.forEach((contact) => {
//   cards.push(
//     <Card
//       name={contact.name}
//       imgURL={contact.imgURL}
//       phone={contact.phone}
//       email={contact.email}
//     />
//   );
// });

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      {Contacts.map(createCard)}
    </div>
  );
}

export default App;
