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
        mountedBoard.find('.board-row').find(Square).first().simulate('click');
        expect(spy).toHaveBeenCalled();
    });
});