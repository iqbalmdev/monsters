// import { Component } from "react";
import "./card.styles.css";

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
import { Montser } from "../../App";
import { Fragment } from "react";

type CardProps = {
monsters:Montser
}
const Card = ({ monsters }:CardProps) => {
  const { id, email, name } = monsters;
  return (
    <Fragment >

    <div className="card-container" >
      <img
        alt={`monster ${name}`}
        src={`https:robohash.org/${id}?set=set2&size=180x180`}
        />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
        </Fragment>
  );
};

export default Card;
