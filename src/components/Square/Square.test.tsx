import * as React from 'react';
import { shallow } from 'enzyme';
import Square from './Square';

describe('Square', () => {
    it('should render Square without crashing', () => {
        shallow(<Square onClick={() => undefined} value="" />);
    });
});