define([
	'jquery',
	'bootstrap-alert',
	'bootstrap-button',
	'bootstrap-carousel',
	'bootstrap-collapse',
	'bootstrap-dropdown',
	'bootstrap-modal',
	'bootstrap-popover',
	'bootstrap-scrollspy',
	'bootstrap-tab',
	'bootstrap-tooltip',
	'bootstrap-transition',
	'bootstrap-typeahead'
],
function($) {
	
	function bootstrap() {
		var $context = $(arguments[1]);
		return $context[arguments[0]].apply($context, Array.prototype.slice.call( arguments, 2 ) );
	};
	
	function mapBS(methodName) {
		return function() {
			Array.prototype.unshift.call(arguments, methodName);
			var args = arguments;
			return bootstrap.apply(this, args);
		};
	}
	
	var bootstrapObj = {
		'alert': mapBS('alert'),
		'button': mapBS('button'),
		'carousel': mapBS('carousel'),
		'collapse': mapBS('collapse'),
		'dropdown': mapBS('dropdown'),
		'modal': mapBS('modal'),
		'popover': mapBS('popover'),
		'scrollspy': mapBS('scrollspy'),
		'tab': mapBS('tab'),
		'tooltip': mapBS('tooltip'),
		'transition': mapBS('transition'),
		'typeahead': mapBS('typeahead')
	}
	
    return bootstrapObj;
});