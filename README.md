# PostCSS Axis [![Build Status](https://travis-ci.org/kinday/postcss-axis.svg)](https://travis-ci.org/kinday/postcss-axis)

[PostCSS] plugin which adds shorthands for opposite properties.

[PostCSS]: https://github.com/postcss/postcss

```css
/* Input example */
.foo {
  margin-x: 10px;
  padding-y: 10px 20px;
  border-x: 1px solid #f00;
  border-y-color: #fff;
}
```

```css
/* Output example */
.foo {
  margin-left: 10px;
  margin-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-left: 1px solid #f00;
  border-right: 1px solid #f00;
  border-top-color: #fff;
  border-bottom-color: #fff;
}
```

## Installation

```bash
npm install postcss-axis
```

## Usage

```js
postcss([ require('postcss-axis') ])
```

See [PostCSS] docs for examples for your environment.
