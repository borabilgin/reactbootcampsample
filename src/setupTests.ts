//Configuration needed to setup enzyme with React 16

import * as  Enzyme from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new ReactSixteenAdapter() });