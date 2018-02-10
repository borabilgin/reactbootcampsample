import * as React from 'react';

interface SquareProps {
    onClick: () => any; // this is the definiton of the onClick function (not the function itself though!)
    value: string;
}

const Square: React.StatelessComponent<SquareProps> = ({value, onClick}) => {
    return (
        <button className="square" onClick={() => onClick()}>
            {value}
        </button>
    );

};

// export so other components can import !
export default Square;