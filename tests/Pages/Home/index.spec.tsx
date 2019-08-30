import * as React from 'react';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {shallow} from 'enzyme';

const store = configureStore();

import Home from '../../../src/Pages/Home';

describe('Home page', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Provider store={store({themeStore:{theme: 'light'}})}><Home/></Provider>);
  });


  it('should render correctly', () => {

    expect(wrapper)
  });
});
