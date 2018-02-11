import * as React from 'react';
import HttpService from '../../util/HttpService';

interface AboutProps {

}

interface AboutState {
    content: string;
}

interface WikipediaItem {
    msg: string;
}

class About extends React.Component<AboutProps, AboutState> {
    constructor(props: AboutProps, state: AboutState) {
        super(props, state);

        this.state = {
            content: 'Please wait while we retrieve Tic Tac Toe Game information...'
        };
    }

    componentDidMount() {
        // tslint:disable-next-line:max-line-length
        HttpService.getCustom<WikipediaItem>('http://demo9185611.mockable.io/')
            .subscribe((response) => {
                this.setState({content: response.msg});
            },         (error) => {
                this.setState({content: 'An error occurred while getting data!'});
            });
    }

    render() {
        return (
            <div>
                <div>About Tic Tac Toe game</div>
                <p>{this.state.content}</p>
            </div>
        );
    }
}

export default About;