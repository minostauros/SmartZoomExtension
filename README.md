# SmartZoomExtension
SmartZoom (double tap zoom like in Safari) as an extension for Firefox, Chrome, and so on.

[Demo](https://lab.hakim.se/zoom-js/) by Hakim.
This repo is to turn [zoom.js](smartzoom/zoom.js) into an extension format.

## How to install
Firefox: [Your first extension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension#Installing)

Chrome: [Getting Started Tutorial](https://developer.chrome.com/extensions/getstarted#manifest)

## How to use
Shift + Click

## How to change shortcut
Change [this line](smartzoom/addevent.js#2) with event key you desire, then reload the extension. [Getting event key](https://keycode.info/).

## License

This repo is licensed under [MIT License](LICENSE), with following references:

- [zoom.js](smartzoom/zoom.js) is MIT licensed under Copyright (C) 2017 Hakim El Hattab, http://hakim.se
- [icon.png](smartzoom/icon.png) is made by [Freepik](https://www.flaticon.com/authors/freepik) from www.flaticon.com
