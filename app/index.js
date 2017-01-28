'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var _ = require('lodash');
var _s = require('underscore.string');
_.mixin(_s.exports());

var ThundrModuleGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using the fantastic thundr-module generator.'));

    
    var prompts = [];
    if(!this.config.get('name')){
    	prompts.push({
    		name: 'name',
    		message: 'What is the name of this module?'
    	});
    }
    if(!this.config.get('pkg')){
    	prompts.push({
    		name: 'pkg',
    		message: 'What is the base package of this module (i.e. com.you.module)?'
    	});
    }
    if(!this.config.get('javaVersion')){
    	prompts.push({
    		name: 'javaVersion',
    		message: 'What is the java version for this module (i.e. 7, 8, 9)?'
    	});
    }

    this.prompt(prompts, function (props) {
      this.name = props.name || this.config.get('name');
      this.pkg = props.pkg || this.config.get('pkg');
      this.javaVersion = props.javaVersion || this.config.get('javaVersion');
      
      this.javaModule = _.capitalize(_.camelize(this.name));
      this.filSystemPkg = this.pkg.replace(/\./g, '/'); 
      
      this.config.set('name', this.name);
      this.config.set('pkg', this.pkg);
      this.config.set('javaVersion', this.javaVersion);
      this.config.save();
      done();
    }.bind(this));
  },

  app: function () {
	  
	this.copy('gitignore', '.gitignore');
	this.template('_pom.xml', 'pom.xml');
	this.template('_java-version', '.java-version');
	this.mkdir("src/main/resource/");
	this.mkdir("src/main/java/"+this.filSystemPkg);
	this.mkdir("src/test/java/"+this.filSystemPkg);
	this.template('_Module.java', 'src/main/java/'+ this.filSystemPkg +'/'+this.javaModule+"Module.java");
  }
});

module.exports = ThundrModuleGenerator;