# generator-thundr-module [![Build Status](https://secure.travis-ci.org/atomicleopard/generator-thundr-module.png?branch=master)](https://travis-ci.org/atomicleopard/generator-thundr-module)

[![thundr Logo](http://3wks.github.io/thundr/static/img/logoFullSmall.png)](http://3wks.github.io/thundr/index.html) 

This [Yeoman](http://yeoman.io) generator will create library scaffolding for a [thundr](http://3wks.github.io/thundr/) module which is setup up to use [Maven](http://maven.apache.org/).

#### Build all your source and assets with maven:
```
mvn package
```

This toolchain requires:
* Java (duh) in JDK fashion
* Maven
* Node
* This generator installed (```npm install -g generator-thundr-module```)

Then just run the generator in your desired project directory and answer the questions:
```
mkdir my-module;
cd my-module;
yo thundr-module
```

## Project layout

The resulting project will be a standard maven project.

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-thundr-module from npm, run:

```
$ npm install -g generator-thundr-module
```

Finally, initiate the generator:

```
$ yo thundr-module
```

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

MIT
