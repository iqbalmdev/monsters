import "./App.css";
import CardComponent from "./Components/Card-list/card-list.Component";
import SearchBox from "./Components/Search-box/search-box.component";

import React, { useState, useEffect,ChangeEvent } from "react";
import { getData } from "./utils/data.utils";
export type Montser = {
id:number
name:string;
email:string
}
const App = () => {
  // State variables
  const [monsters, setMonsters] = useState<Montser[]>([]);
  const [searchStrings, setSearchStrings] = useState("");
  const [filteredData, setFilterData] = useState(monsters);

  // Fetch data from API
  console.log("rendered");
  const fetchData =async () => {
    // console.log(" ftech api");
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((monsters) => {
    //     setMonsters(monsters);
    //   });
    const res = await getData<Montser[]>("https://jsonplaceholder.typicode.com/users")
    setMonsters(res)
  };

  // Handle search input change
  const handleSearch = (event:ChangeEvent<HTMLInputElement>):void => {
    const searchStrings = event.target.value.toLowerCase();
    setSearchStrings(searchStrings);
  };

  // Filter monsters based on search input

  // Fetch data and filter on component mount and when filteredData changes
  // filter();
  useEffect(() => {
    console.log("data fetching");
    fetchData();
  }, []);
  useEffect(() => {
    const filteredDatas = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchStrings);
    });
    setFilterData(filteredDatas);
    console.log("filter effect");
  }, [monsters, searchStrings]);
  const [title, setTitle] = useState("");
  const handleTitleChange = (event:ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  return (
    <>
      <div className="App">
        <h1 className="app_title">{title}</h1>
        <input onChange={handleTitleChange} />
        <SearchBox
          className="monster-search-box"
          searchHandler={handleSearch}
          placeholder="Search"
        />
        <CardComponent monster={filteredData} />
      </div>
    </>
  );
};

export default App;
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchStrings: "",
//     };
//   }

//   componentDidMount() {
//     console.log("compoinent did mount");
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((monsters) =>
//         this.setState(
//           () => {
//             return {
//               monsters,
//             };
//           },
//           () => {
//             console.log(this.state);
//           }
//         )
//       );
//   }
//   handleSearchChange = (event) => {
//     const searchStrings = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return {
//         searchStrings: searchStrings,
//       };
//     });
//   };
//   render() {
//     const { monsters, searchStrings } = this.state;
//     const { handleSearchChange } = this;
//     const filteredData = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchStrings);
//     });
//     console.log(filteredData);
//     return (
//       <>
//         <div className="App">
//           <h1 className="app_title">Monster Rolodex</h1>
//           <SearchBox
//             className="monster-search-box"
//             searchHandler={handleSearchChange}
//             placeholder="search-box"
//           />
//           <CardComponent monsters={filteredData} />
//         </div>
//       </>
//     );
//   }
// }

// export default App;
