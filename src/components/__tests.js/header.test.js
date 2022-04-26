import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../Header';
Enzyme.configure({ adapter: new Adapter() });

const coin1 = [{
    "image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    "name":"Bitcoin",
    "price":3106272,
    "pricechange":3.44971,
    "marketcap":1990031721822
}];
const coin2=[];

describe('Header renders',()=>{
    const instance = shallow(<Header />);

    it('should render correctly',()=>{
        expect(instance).toMatchSnapshot();
    })

    it('should have props defined',()=>{
        instance.setProps({coins:coin1})
        expect(instance.props()).toBeDefined();
    })

    it('should render one form',()=>{
        expect(instance.find('form')).toHaveLength(1)
    })

    it('should render one input',()=>{
        expect(instance.find('input')).toHaveLength(1)
    })

    it('should render Coin component when coin prop is present',()=>{
        instance.setProps({coins:coin1})
        expect(instance.find('Coin')).toHaveLength(1)
    })
    it('should render Coin component when coin prop is empty',()=>{
        instance.setProps({coins:coin2})
        expect(instance.find('Coin')).toHaveLength(0)
    })
})

describe('Header form interactions',()=>{
    const instance = shallow(<Header />);

    it('it should change input value ,when onChange is invoked',()=>{
        instance.find('input').simulate('change',{target:{value:'bit'}})
        expect(instance.find('input').prop('value')).toBe('bit');
    })
})