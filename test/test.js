var postcss = require('postcss');
var expect  = require('chai').expect;

var plugin = require('../');

var test = function (input, output, opts, done) {
    postcss([ plugin(opts) ]).process(input).then(function (result) {
        expect(result.css).to.eql(output);
        expect(result.warnings()).to.be.empty;
        done();
    }).catch(function (error) {
        done(error);
    });
};

describe('postcss-axis', function () {

    describe('border', function () {

        it('sets borders', function (done) {
            var input = 'a{ border-x: 10px solid #000; }';
            var output = [
                'a{',
                'border-left: 10px solid #000;',
                'border-right: 10px solid #000;',
                '}'
            ].join(' ');
            test(input, output, {}, done);
        });

    });

    describe('border longhands', function () {

        it('sets borders color', function (done) {
            var input = 'a{ border-x-color: #000 #333; }';
            var output = [
                'a{',
                'border-left-color: #000;',
                'border-right-color: #333;',
                '}'
            ].join(' ');
            test(input, output, {}, done);
        });

        it('sets borders color by one value', function (done) {
            var input = 'a{ border-x-color: #000; }';
            var output = [
                'a{',
                'border-left-color: #000;',
                'border-right-color: #000;',
                '}'
            ].join(' ');
            test(input, output, {}, done);
        });

        it('sets borders style', function (done) {
            var input = 'a{ border-x-style: solid dashed; }';
            var output = [
                'a{',
                'border-left-style: solid;',
                'border-right-style: dashed;',
                '}'
            ].join(' ');
            test(input, output, {}, done);
        });

        it('sets borders style by one value', function (done) {
            var input = 'a{ border-x-style: solid; }';
            var output = [
                'a{',
                'border-left-style: solid;',
                'border-right-style: solid;',
                '}'
            ].join(' ');
            test(input, output, {}, done);
        });

        it('sets borders width', function (done) {
            var input = 'a{ border-x-width: 1px 3px; }';
            var output = [
                'a{',
                'border-left-width: 1px;',
                'border-right-width: 3px;',
                '}'
            ].join(' ');
            test(input, output, {}, done);
        });

        it('sets borders width by one value', function (done) {
            var input = 'a{ border-x-width: 1px; }';
            var output = [
                'a{',
                'border-left-width: 1px;',
                'border-right-width: 1px;',
                '}'
            ].join(' ');
            test(input, output, {}, done);
        });

    });

    describe('margin', function () {

        it('sets margins', function (done) {
            var input = 'a{ margin-x: 10px 20px; }';
            var output = 'a{ margin-left: 10px; margin-right: 20px; }';
            test(input, output, {}, done);
        });

        it('sets margins by one value', function (done) {
            var input = 'a{ margin-x: 10px; }';
            var output = 'a{ margin-left: 10px; margin-right: 10px; }';
            test(input, output, {}, done);
        });

    });

    describe('padding', function () {

        it('sets paddings', function (done) {
            var input = 'a{ padding-x: 10px 20px; }';
            var output = 'a{ padding-left: 10px; padding-right: 20px; }';
            test(input, output, {}, done);
        });

        it('sets paddings by one value', function (done) {
            var input = 'a{ padding-x: 10px; }';
            var output = 'a{ padding-left: 10px; padding-right: 10px; }';
            test(input, output, {}, done);
        });

    });

    describe('options', function () {

        it('swaps left and right when `tbrl` is set', function (done) {
            var input = 'a{ padding-x: 20px 10px; }';
            var output = 'a{ padding-left: 10px; padding-right: 20px; }';
            test(input, output, { trbl: true }, done);
        });

    });

});
