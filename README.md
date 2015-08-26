# PostCSS Axis [![Build Status](https://travis-ci.org/kinday/postcss-axis.svg)](https://travis-ci.org/kinday/postcss-axis)

[PostCSS] plugin which adds shorthands for opposite properties.

[PostCSS]: https://github.com/postcss/postcss

```css
/* Input example */
.foo {
  margin-x: 10px;
  padding-y: 10px 20px;
}
```

```css
/* Output example */
.foo {
  margin-left: 10px;
  margin-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
}
```

## Installation

```bash
npm install kinday/postcss-axis
```

## Usage

```js
postcss([ require('postcss-axis') ])
```

See [PostCSS] docs for examples for your environment.
