import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Coin from '../Coin';
Enzyme.configure({ adapter: new Adapter() });

const coin = {
    "image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    "name":"Bitcoin",
    "price":3106272,
    "pricechange":3.44971,
    "marketcap":1990031721822
}
describe('Coin',()=>{
    const instance = shallow(<Coin {...coin}/>);

    it('should have props',()=>{
        expect(instance.props()).toBeDefined()
    })

    it('should check snapshot',()=>{
        expect(instance).toMatchSnapshot()
    })
    
    it('should display coin symbol image',()=>{
        const imageSrc = instance.find('div div img').prop('src');
        const imageAlt = instance.find('div div img').prop('alt');
         expect(imageSrc).toBe('https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579');
         expect(imageAlt).toBe('crypto')
    })

    it('should display coin symbol name',()=>{
        const nameElement = instance.find('#coin-name');
         expect(nameElement.text()).toBe('Bitcoin');
    })

    it('should display coin symbol price',()=>{
        const priceElement = instance.find('#coin-price');
         expect(priceElement.text()).toBe('Rs.3106272');
    })

    it('should display green coin price change',()=>{
        const priceElement = instance.find('#coin-pricechange');
         expect(priceElement.text()).toBe('3.45%');
         expect(priceElement.prop('className')).toBe('green');
    })

    it('should display coin market cap',()=>{
        const capElement = instance.find('#coin-cap');
         expect(capElement.text()).toBe('Mkt Cap: Rs.19,90,03,17,21,822');
    })
})