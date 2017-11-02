import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {

    render() {
        return (
            <div>
                <Header onNewGame={() => this.newGame()}/>
                <GuessSection 
                    onGuess={(guess) => this.guess(guess)} />
                <GuessCount />
                <GuessList />
            </div>
        );
    }
}

