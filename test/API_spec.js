import {expect} from 'chai';
import API from '../src/API/API';

describe('API call', () => {
    const size = '';
    it('to return error message when given bad URL', () => {
        expect(API(size)).to.equal("there's an error!");
    }) 
})