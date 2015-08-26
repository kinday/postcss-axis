var postcss = require('postcss');

function getAttrs(name, axis) {
    var attrs = {
        x: ['left', 'right'],
        y: ['top', 'bottom']
    };

    return attrs[axis].map(function (side) {
        return [name, side].join('-');
    });
}

module.exports = postcss.plugin('postcss-axis', function (opts) {
    opts = opts || {};

    return function (css) {
        var filter = /^(margin|padding)-(x|y)$/;

        css.walkDecls(filter, function (decl) {
            var match = decl.prop.match(filter);
            var attrs = getAttrs(match[1], match[2]);
            var values = postcss.list.space(decl.value);

            if ( values.length === 1 ) values[1] = values[0];

            decl.cloneBefore({ prop: attrs[0], value: values[0] });
            decl.cloneBefore({ prop: attrs[1], value: values[1] });

            decl.remove();
        });
    };
});
