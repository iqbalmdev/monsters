// import { Component } from "react";
import "./card.styles.css";
import { Link, useNavigate } from "react-router-dom";
// class Card extends Component {
//   render() {
//     const { id, name, email } = this.onster;
//     return (
//       <>
//         <div key={id} className="card-container">
//           <img
//             alt={`monster $name}`}
//             src={`https://robohash.org/${id}?set=set2&size=180x180`}
//           />
//           <h2>{name}</h2>
//           <p>{email}</p>
//         </div>
//       </>
//     );
//   }
// }
// export default Card;
import React from "react";

const Card = ({ monsters }) => {
  const { id, email, name } = monsters;
  return (
    <div className="card-container" key={id}>
      <img
        alt={`monster ${name}`}
        src={`https:robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
