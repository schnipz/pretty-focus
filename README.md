# Pretty Focus

Allow custom CSS :focus states for mouse/touch users while maintaining normal keyboard focus for accessibility.

## Why?

This module is designed to provide a simple way for developers to maintain keyboard accessibility by _NOT_ having to fully remove focus styles from all interactable elements in order to meet a design brief.

Users on a touchpad, touch device or those with a mouse will never see the default (or any custom) focus states as they navigate the site - but those users who depend upon them for keyboard navigation will still be able to do so.

It's here to help improve accessibility for all users, as well as keep developers, designers and the client happy :)

## Usage

Include `dist/pretty-focus.min.js` at the end of your HTML `<body>` element, before the closing `</body>` tag.

A class of `focus-disabled` will be added to the `<body>` element whenever the focus styles should be removed.

Add the following CSS to your project where applicable to disable all focus styles for non-keyboard users:

```CSS
.focus-disabled :focus {
  outline: none;
}
```

NOTE: Update the CSS properties as required to disable/customise for your projects supported browsers.