import "can-view-autorender";
import Component from "can-component";
import DefineMap from "can-define/map/";

import tmpl from "./index.stache";

const HelloWorldVM = DefineMap.extend({
	message: {value: "Hello There!"}
});

Component.extend({
	tag: "hello-world",
	view: tmpl,
	ViewModel: HelloWorldVM
});