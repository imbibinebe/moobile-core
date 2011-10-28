/*
---

name: Mask

description: Provides a view that creates a mask over a view.

license: MIT-style license.

authors:
	- Jean-Philippe Dery (jeanphilippe.dery@gmail.com)

requires:
	- View

provides:
	- Mask

...
*/

Moobile.Mask = new Class({

	Extends: Moobile.View,

	options: {
		className: 'mask',
		fillStyle: 'solid'
	},

	build: function() {
		
		this.parent();
		
		if (this.options.className) {
			this.element.addClass(this.options.className + '-' + this.options.fillStyle);			
		}
		
		return this;
	},

	attachEvents: function() {
		this.element.addEvent('transitionend', this.bound('onTransitionEnd'));
		this.parent();
		return this;
	},

	detachEvents: function() {
		this.element.removeEvent('transitionend', this.bound('onTransitionEnd'));
		this.parent();
		return this;
	},

	show: function() {
		this.element.addClass.delay(5, this.element, 'visible');
		return this;
	},

	hide: function() {
		this.element.removeClass.delay(5, this.element, 'visible');
		return this;
	},

	onTransitionEnd: function(e) {
		var opacity = this.element.getStyle('opacity');
		if (opacity == 0) {
			this.didHide();
			this.fireEvent('hide');
		} else {
			this.didShow();
			this.fireEvent('show');
		}
		return this;
	}

});