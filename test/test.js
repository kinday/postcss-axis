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

});
