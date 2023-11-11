// import { Component } from "react";
import "./card-list.component.css";
import Card from "../Card/card.components";
// class CardComponent extends Component {
//   render() {
//     const { monsters } = this.props;
//     return (
//       <div className="card-list">
//         {monsters?.map((data) => {
//           return (
//             <>
//               {/* <div key={id} className="card-container">
//               <img
//                 alt={`monster ${name}`}
//                 src={`https://robohash.org/${id}?set=set2&size=180x180`}
//               />
//               <h2>{name}</h2>
//               <p>{email}</p>
//             </div> */}
//               <Card monster={data} />
//             </>
//           );
//         })}
//       </div>
//     );
//   }
// }
// export default CardComponent;
import React, { Fragment } from "react";
import { Montser } from "../../App";

type CardListProp  = {
  monster:Montser[]
}
const card = ({monster}:CardListProp) => {
  return (
    <>
      <div className="card-list">
        {monster?.map((data) => {
          return (
            
            
             <Fragment  key={data.id}>

              <Card  monsters={data} />
             </Fragment>
            
          );
        })}
      </div>
    </>
  );
};

export default card;
