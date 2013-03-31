# {%= name %}

{%= description %}

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/{%= git_user %}/{%= git_repo %}/master/dist/{%= name %}.min.js
[max]: https://raw.github.com/{%= git_user %}/{%= git_repo %}/master/dist/{%= name %}.js

``` javascript
// Sample code to get started with {%= namespace %}
```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.

To get started with development simply do a `npm install` inside the cloned repository to install all dependencies needed for running [Grunt.js](http://gruntjs.com/), which is used as build tool. Afterwards you can do a simple `grunt` to execute the default task which will test and build the library.

Lint and test your code using: `grunt hint test`.

_Also, please don't edit files in the "dist" subdirectory as they are generated via Grunt. You'll find source code in the "lib/src" subdirectory; tests are located in "lib/tests"!_

## Release History
_(Nothing yet)_

## License
Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.

The structure of this project has been created with the [emberjs-library template](https://github.com/pangratz/grunt-init-emberjs-library) for Grunt.js