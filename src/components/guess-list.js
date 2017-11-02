import React from 'react';
import { connect } from 'react-redux';

import './css/guess-list.css';


//this needs access to store because of the guess and it needs to make an array of it
export  function GuessList(props) {
    const guesses = props.guesses.map((guess, index) => (
        <li key={index}>
            {guess}
        </li>
    ));

    return (
        <ul id="guessList" className="guessBox clearfix">
            {guesses}
        </ul>
    );
};


const mapStateToProps = state => ({
    guesses:state.guesses
});

export default connect(mapStateToProps)(GuessList);