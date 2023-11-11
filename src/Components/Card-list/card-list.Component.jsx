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
import React from "react";

const card = (props) => {
  return (
    <>
      <div className="card-list">
        {props?.monsters?.map((data, idx) => {
          return (
            <>
              {/* <div key={id} className="card-container">
               <img
                 alt={`monster ${name}`}
                 src={`https:robohash.org/${id}?set=set2&size=180x180`}
               />
               <h2>{name}</h2>
               <p>{email}</p>
             </div> */}
              <Card key={data?.id} monsters={data} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default card;
