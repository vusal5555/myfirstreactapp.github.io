import { Component } from 'react';
import './search-box.styles.css';

const SearchBox = ({ className, placeholder, onChange }) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChange}
  ></input>
);

// class SearchBox extends Component {
//   render() {
//     const { className, placeholder, onChange } = this.props;
//     return (
//       <input
//         className={`search-box ${className}`}
//         type="search"
//         placeholder={placeholder}
//         onChange={onChange}
//       ></input>
//     );
//   }
// }

export default SearchBox;
