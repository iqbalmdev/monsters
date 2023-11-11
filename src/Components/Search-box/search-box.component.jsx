// import { Component } from "react";
// import "./search-box.styles.css";
// class SearchBox extends Component {
//   render() {
//     return (
//       <>
//         <input
//           className={`search-box ${this.props?.className}`}
//           type="search"
//           placeholder={this?.props?.placeholder}
//           onChange={this?.props?.searchHandler}
//         />
//       </>
//     );
//   }
// }
// export default SearchBox;
import React from "react";
import "./search-box.styles.css";
const searchBox = (props) => {
  return (
    <>
      <input
        className={`search-box ${props?.className}`}
        type="search"
        placeholder={props?.placeholder}
        onChange={props?.searchHandler}
      />
    </>
  );
};

export default searchBox;
