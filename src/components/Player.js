import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context/indexContent'
import Counter from './Counter';
import Icon from './Icon';

class Player extends PureComponent {

  static propTypes = {
    score: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
  };

  render() {
    const {
      score,
      index,
    } = this.props;

    return (
      <div className="player">
        <Consumer>
          {({actions, highScore, players}) => (
            <span className="player-name">
              <button className="remove-player" onClick={() => actions.removePlayer(players[index].id)}>✖</button>
              <Icon isHighScore={highScore === score} />
              { players[index].name }
            </span>
          )}
        </Consumer>
        <Counter index={index} />
      </div>
    );
  }
}

export default Player;
