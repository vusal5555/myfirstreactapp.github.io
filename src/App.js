import { Component } from 'react';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const renderOnChange = event => {
    const searchFieldString = event.target.value;
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => {
        setMonsters(users);
      });
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => {
      return monster.name
        .toLocaleLowerCase()
        .includes(searchField.toLocaleLowerCase());
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  return (
    <div className="App">
      <h1 className="title">Monsters Rolodex</h1>
      <SearchBox
        className="monsters-search-box"
        onChange={renderOnChange}
        placeholder="search monsters"
      ></SearchBox>
      <div>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(users => {
//         this.setState(() => {
//           return { monsters: users };
//         });
//       });
//   }

//   renderOnChange = event => {
//     const searchField = event.target.value;

//     this.setState(() => {
//       return { searchField: searchField };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { renderOnChange } = this;

//     const filteredMonsters = monsters.filter(monster => {
//       return monster.name
//         .toLocaleLowerCase()
//         .includes(searchField.toLocaleLowerCase());
//     });
//     return (
//       <div className="App">
//         <h1 className="title">Monsters Rolodex</h1>
//         <SearchBox
//           className="monsters-search-box"
//           onChange={renderOnChange}
//           placeholder="search monsters"
//         ></SearchBox>
//         <div>
//           <CardList monsters={filteredMonsters}></CardList>
//         </div>
//       </div>
//     );
//   }
// }

export default App;
