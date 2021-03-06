# Pretty Focus

[![Dependency Status](https://david-dm.org/schnipz/pretty-focus.svg)](https://david-dm.org/schnipz/pretty-focus)
[![Dev Dependencies](https://david-dm.org/schnipz/pretty-focus/dev-status.svg)](https://david-dm.org/schnipz/pretty-focus#info=devDependencies)
[![Bower version](https://badge.fury.io/bo/pretty-focus.svg)](https://badge.fury.io/bo/pretty-focus)

> Custom CSS focus states for mouse/touch users while maintaining normal keyboard focus for accessibility.

This module is designed to provide a simple way for developers to maintain keyboard accessibility by *NOT* having to fully remove focus styles from all interactable elements in order to meet a design brief.

Users on a touchpad, touch device or those with a mouse will never see the default (or any custom) focus states as they navigate the site - but those users who depend upon them for keyboard navigation will still be able to do so.

It's here to help improve accessibility for all users, as well as keep developers, designers and the client happy :)

## Demo

See a basic example of the results here: http://schnipz.github.io/pretty-focus/demo/

## Setup

The easiest way to get started is using `bower install pretty-focus` and then including the `dist/pretty-focus.min.js` file in your app. That's it.

**AngularJS** - There is an independent module for use in AngularJS if needed. Install with Bower, include the `dist/ng-pretty-focus.min.js` file in your app and add the `prettyFocus` module dependency. Initialization will be triggered automatically on app `.run()`.

## Usage

A class of `focus-disabled` will be added to the `<body>` element whenever a pointer input is being activated.

Add the following CSS to your project where applicable to disable all focus styles for non-keyboard users:

```CSS
.focus-disabled :focus {
  outline: none;
}
```

NOTE: Update the CSS properties as required for your project and supported browsers.

## License
Licensed under the [MIT license](LICENSE).
Copyright &copy; 2016 Mike Parsons