var postcss = require('postcss');

function getAttrs(axis, name, subname) {
    var attrs = {
        x: ['left', 'right'],
        y: ['top', 'bottom']
    };

    return attrs[axis].map(function (side) {
        var parts = [name, side];
        subname && parts.push(subname);
        return parts.join('-');
    });
}

module.exports = postcss.plugin('postcss-axis', function (opts) {
    opts = opts || {};

    return function (css) {
        var filter = /^(border|margin|padding)-(x|y)(?:-(color|style|width))?$/;

        css.walkDecls(filter, function (decl) {
            var match = decl.prop.match(filter);
            var attrs = getAttrs(match[2], match[1], match[3]);
            var values;

            if (match[1] === 'border' && !match[3]) {
                values = [decl.value];
            } else {
                values = postcss.list.space(decl.value);
            }

            if ( values.length === 1 ) values[1] = values[0];

            if (opts.trbl && match[2] === 'x') values = [values[1], values[0]];

            decl.cloneBefore({ prop: attrs[0], value: values[0] });
            decl.cloneBefore({ prop: attrs[1], value: values[1] });

            decl.remove();
        });
    };
});
