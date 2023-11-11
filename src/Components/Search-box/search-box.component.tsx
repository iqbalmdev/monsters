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
import { ChangeEventHandler,ChangeEvent } from "react";
interface ISearchBoxProps extends IChangeHandlerProps {
  className:string;
  placeholder?:string | undefined;

}

interface IChangeHandlerProps{
  // searchHandler:ChangeEventHandler<HTMLInputElement>;
  searchHandler:(event:ChangeEvent<HTMLInputElement>)=>void
}
const searchBox = ({className,placeholder,searchHandler}:ISearchBoxProps) => {
  return (
    <>
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={searchHandler}
      />
    </>
  );
};

export default searchBox;
