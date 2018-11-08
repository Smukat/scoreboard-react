import React, { Component } from 'react';

const ScoreboardContext = React.createContext();

export class Provider extends Component {
	state = {
		players: [
			{
				name: "Jesica",
				score: 0,
				id: 1
			},
			{
				name: "Gauss",
				score: 0,
				id: 2
			},
			{
				name: "Amelie",
				score: 0,
				id: 3
			},
			{
				name: "Kero",
				score: 0,
				id: 4
			}
		]
	};

prevPlayerId = 4;

getHighScore = () => {
	const scores = this.state.players.map( p => p.score );
	const highScore = Math.max(...scores);
	return (highScore) ? highScore : null;
}

handleScoreChange = (index, delta) => {
	this.setState( prevState => ({
		score: prevState.players[index].score += delta
	}));
}

handleAddPlayer = (name) => {
	this.setState( prevState => {
		return {
			players: [
				...prevState.players,
				{
					name,
					score: 0,
					id: this.prevPlayerId += 1
				}
			]
		};
	});
}

handleRemovePlayer = (id) => {
	this.setState( prevState => {
		return {
			players: prevState.players.filter(p => p.id !== id)
		};
	});
}


	render() {
		const highScoreValue = this.getHighScore();
			return (
				<ScoreboardContext.Provider value={{
					players: this.state.players,
					highScore: highScoreValue,
					actions: {
						changeScore: this.handleScoreChange,
						removePlayer: this.handleRemovePlayer,
						addPlayer: this.handleAddPlayer,
					}
				}}>
					{ this.props.children }
				</ScoreboardContext.Provider>
			);
	}
}
export const Consumer = ScoreboardContext.Consumer;

