import * as React from 'react';

export interface AboutProps {
    data: string;
}

class About extends React.Component<AboutProps, {}> {
    constructor(props: AboutProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>About Tic Tac Toe game</div>
                <p>{this.props.data}</p>
            </div>
        );
    }
}

export default About;