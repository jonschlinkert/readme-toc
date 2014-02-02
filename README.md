# readme-toc [![NPM version](https://badge.fury.io/js/readme-toc.png)](http://badge.fury.io/js/readme-toc)

> Generate a TOC for your project's README in 2 seconds, maybe 3.


```bash
npm i -g readme-toc --save
```

## Usage

First, add this code comment to your README wherever you want the TOC to be generated.

```html
<!-- toc -->
```

Next, from same directory as your README, run the following in the command line:

```js
toc
```

## Example

After running the first time, the generated TOC will look like this:

```markdown
<!-- toc -->
* [Usage](#usage)
* [Author](#author)
* [License](#license)

<!-- toc stop -->
```

Which looks like this in the browser:

<!-- toc -->
* [Usage](#usage)
* [Author](#author)
* [License](#license)

<!-- toc stop -->

_Note that GitHub Flavored Markdown requires the extra newline for the `<!-- toc stop -->` code comment to remain hidden._


## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)


## License
Copyright (c) 2014 [Jon Schlinkert](http://twitter.com/jonschlinkert), [Brian Woodward](http://twitter.com/doowb), contributors.
Released under the [MIT license](./LICENSE-MIT)