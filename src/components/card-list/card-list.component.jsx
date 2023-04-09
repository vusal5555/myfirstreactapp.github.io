import './card-list.styles.css';
import Card from './card-component';

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster, id) => {
      return <Card monster={monster} key={id}></Card>;
    })}
  </div>
);

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;

//     return (
//       <div className="card-list">
//         {monsters.map(monster => {
//           return <Card monster={monster}></Card>;
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
