import { Component } from "react";

class UserFavoriteAnimals extends Component {
  render() {
    const { favAnimals } = this.props;
    return (
      <div>
        <h2>My Favorite Animals</h2>
        <ul>
          {favAnimals.map((animal, index) => (
            <li key={index}>{animal}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserFavoriteAnimals;