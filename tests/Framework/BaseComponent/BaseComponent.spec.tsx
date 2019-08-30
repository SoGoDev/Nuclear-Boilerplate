import * as React from 'react';
import BaseComponent from "../../../src/Framework/Fundamental/BaseComponent/BaseComponent";
import Enzyme, {shallow, mount, render} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new Adapter()});

describe('Test BaseComponent', () => {

  let wrapper;
  let wrapperInstanse;

  const props = {
    customProp: 'custom',
    APP_STORE_PROPS: {
      theme: 'light'
    }
  };

  beforeEach(() => {
    wrapper = shallow(<BaseComponent />);
    wrapperInstanse = new BaseComponent(props);

  });

  it('test render component', () => {
    expect(wrapper.length).toEqual(1)
  });

  it('test getProp method', () => {
    expect(wrapperInstanse.getProp('customProp')).toEqual(props.customProp)
  });

  it('test getStoreProp method', () => {
    expect(wrapperInstanse.getStoreProp('theme')).toEqual(props.APP_STORE_PROPS.theme)
  });

  it('test toLocal method', () => {
    expect(wrapperInstanse.toLocal('hello')).toEqual('Hello')
  });

});
