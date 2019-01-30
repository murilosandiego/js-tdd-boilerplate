/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import { expect } from 'chai';
import {
  sum,
  sub,
  mult,
  div,
} from '../src/main';

describe('Calc', () => {
  describe('Smoke tests', () => {
    it('should exists method calc', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });

    it('should exists method sub', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });

    it('should exists method mult', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a('function');
    });

    it('should exists method div', () => {
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });
  });

  describe('Sum', () => {
    it('should return 4 when `sum(2,2)`', () => {
      expect(sum(2, 2)).to.equal(4);
    });

    it('should return 5 when `sum(2,3)`', () => {
      expect(sum(2, 3)).to.equal(5);
    });
  });

  describe('Sub', () => {
    it('should return 4 when `sum(6,2)`', () => {
      expect(sub(6, 2)).to.equal(4);
    });

    it('should return -5 when `sum(2,7)`', () => {
      expect(sub(2, 7)).to.equal(-5);
    });
  });
  describe('Mult', () => {
    it('should return 10 when `mult(5,2)`', () => {
      expect(mult(5, 2)).to.equal(10);
    });

    it('should return -5 when `mult(5,-1)`', () => {
      expect(mult(5, -1)).to.equal(-5);
    });
  });
  describe('Div', () => {
    it('should return 5 when `div(10,2)`', () => {
      expect(div(10, 2)).to.equal(5);
    });
    it('should return 4 when `div(8,2)`', () => {
      expect(div(8, 2)).to.equal(4);
    });
    it('should return `Não é possível dividir por zero` when `div(5,0)`', () => {
      expect(div(5, 0)).to.equal('Não é possível dividir por zero');
    });
  });
});
