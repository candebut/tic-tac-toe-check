import React from 'react';
import App from './App';
import { shallow, configure } from 'enzyme';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App', () => {
  const container = shallow(<App />);
  it('should match the snapshot', () => {
    expect(container.html()).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    mount(<App />);
  });

  describe('Button render correctly', () => {
    it('renders one button', () => {
      const wrapper = shallow(
        <App />
      );
      const element = wrapper.find('button');
      expect(element.length).toBe(1);
    });
  });
})
