import * as React from 'react';
import { shallow } from 'enzyme';
import Board, { BoardProps } from './Board';
import Square from './../Square/Square';

describe('Board', () => {

    let mountedBoard: any;
    let props : BoardProps = {
        squares: [],
        onClick: ()=>undefined
    };

    beforeEach(() => {
        mountedBoard = shallow(<Board {...props}/>)
    });

    // Not that useful of a test, but demo's how to simulate an event 
    // and use a spy callback function
    it('should call onClick prop when clicked', () => {
        const spy = jest.fn();
        props.onClick = spy;
        mountedBoard.setProps(props);
        mountedBoard.find(Square).first().simulate('click');
        expect(spy).toHaveBeenCalled();
    });

    it('should render 9 squares', () => {
        expect(mountedBoard.find(Square).length).toEqual(9);
    });

    //Snapshot test
    it('should render 9 squares', () => {
        expect(mountedBoard.find(Square).length).toMatchSnapshot();
    });

    //Snapshot of render
    it('should render 9 squares', () => {
        const wrapper = shallow(<Board {...props}/>);
        expect(wrapper).toMatchSnapshot();
    });
});