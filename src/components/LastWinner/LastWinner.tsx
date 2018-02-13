import * as React from 'react';
import { connect } from 'react-redux';
import { GameState } from '../../store/State';

interface LastWinnerProps {
    lastWinner: string;
}

const LastWinner: React.StatelessComponent<LastWinnerProps> = ({lastWinner}) => {
    return (
        <div>
            <p>Last winner is: {lastWinner ? lastWinner : 'no one'}</p>
        </div>
    );

};

// Takes the global application state, and maps it to our Component props
// So our component props are always created by the global app state
export function mapStateToProps(state: GameState) {
    return {
        lastWinner: state.lastWinner
    };
}

export default connect(mapStateToProps)(LastWinner);