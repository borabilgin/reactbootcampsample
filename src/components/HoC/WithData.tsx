import * as React from 'react';
import HttpService from '../../util/HttpService';

interface Props {
    data: string;
}

interface State {
    content: string;
}
// tslint:disable-next-line:max-line-length
export function WithData<P extends Props>(WrappedComponent: React.ComponentType<P>) {
    return class extends React.Component<P, State> {
        constructor(props: P, state: State) {
            super(props, state);
            this.state = {
                content: 'Please wait while tic-tac-toe infor is retrieved.'
            };
        }
        componentDidMount() {
            HttpService.getWikiEntry()
            .subscribe((response) => {
                this.setState({content: response.msg});
            },         (error) => {
                this.setState({content: 'An error occurred while getting data!'});
            });
        }

        render() {
            // ... and renders the wrapped component with the fresh data!
            // Notice that we pass through any additional props
            return <WrappedComponent data={this.state.content} {...this.props} />;
        }
    };
}