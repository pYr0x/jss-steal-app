import "can-view-autorender";
import Component from "can-component";
import DefineMap from "can-define/map/";

import jss from 'jss';
import preset from 'jss-preset-default';

import tmpl from "./index.stache";

jss.setup(preset());

// Create your style.
const style = {
	myButton: {
		color: 'green'
	}
};

// Compile styles, apply plugins.
const sheet = jss.createStyleSheet(style);


const HelloWorldVM = DefineMap.extend({
	message: {value: "Hello There!"}
});

Component.extend({
	tag: "hello-world",
	view: tmpl,
	ViewModel: HelloWorldVM
});