'use strict';

var expect = require('chai').expect;

var isInt = require('./index');

describe('is-int', function () {
    describe('integer', function () {
        it('should return true', function () {
            expect(isInt(1)).to.be.true;
        });
    });
    describe('float', function () {
        it('should return false', function () {
            expect(isInt(1.1)).to.be.false;
        });
    });
    describe('string', function () {
        it('should return false', function () {
            expect(isInt('foo')).to.be.false;
        });
    });
    describe('number as string', function () {
        it('should return false', function () {
            expect(isInt('1')).to.be.false;
        });
    });
    describe('array', function () {
        it('should return false', function () {
            expect(isInt([1, 2, 3])).to.be.false;
        });
    });
    describe('object', function () {
        it('should return false', function () {
            expect(isInt({foo: 'bar'})).to.be.false;
        });
    });
});
