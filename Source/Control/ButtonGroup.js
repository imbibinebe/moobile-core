/*
---

name: ButtonGroup

description: Provides a control that groups button.

license: MIT-style license.

authors:
	- Jean-Philippe Dery (jeanphilippe.dery@gmail.com)

requires:
	- Control

provides:
	- ButtonGroup

...
*/

/**
 * @name  ButtonGroup
 * @class Provides a button group control.
 *
 * @classdesc
 *
 * [TODO: Description]
 * [TODO: Events]
 * [TODO: Roles]
 * [TODO: Styles]
 * [TODO: Options]
 * [TODO: Element Structure]
 *
 * @extends Control
 *
 * @author  Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
 * @version 0.1
 */
Moobile.ButtonGroup = new Class( /** @lends ButtonGroup.prototype */ {

	Extends: Moobile.Control,

	/**
	 * @private
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1
	 */
	_selectedButton: null,

	/**
	 * @private
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1
	 */
	_selectedButtonIndex: -1,

	/**
	 * @see    http://moobile.net/api/0.1/Control/ButtonGroup#options
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1
	 */
	options: {
		styleName: 'horizontal',
		deselectable: false
	},

	/**
	 * @overrides
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1
	 */
	willBuild: function() {
		this.parent();
		this.element.addClass('button-group');
	},

	/**
	 * @overrides
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1
	 */
	destroy: function() {
		this._selectedButton = null;
		this._selectedButtonIndex = -1;
		this.parent();
	},

	/**
	 * @see    http://moobile.net/api/0.1/Control/List#setSelectedItem
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1
	 */
	setSelectedButton: function(selectedButton) {

		if (this._selectedButton === selectedButton) {
			if (selectedButton && this.options.deselectable) {
				selectedButton = null;
			} else {
				return this;
			}
		}

		if (this._selectedButton) {
			this.fireEvent('deselect', this._selectedButton);
			this._selectedButton.setSelected(false);
			this._selectedButton = null;
		}

		if (selectedButton) {
			this._selectedButton = selectedButton;
			this._selectedButton.setSelected(true);
			this.fireEvent('select', this._selectedButton);
		}

		this._selectedButtonIndex = selectedButton ? this.getChildIndex(selectedButton) : -1;

		return this;
	},

	/**
	 * @see    http://moobile.net/api/0.1/Control/List#setSelectedItem
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1
	 */
	getSelectedButton: function() {
		return this._selectedButton;
	},

	/**
	 * @see    http://moobile.net/api/0.1/Control/List#setSelectedItem
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1
	 */
	setSelectedButtonIndex: function(index) {

		var child = null;
		if (index >= 0) {
			child = this.getChildOfTypeAt(Moobile.Button, index);
		}

		return this.setSelectedButton(child);
	},

	/**
	 * @see    http://moobile.net/api/0.1/Control/List#setSelectedItem
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1
	 */
	getSelectedButtonIndex: function() {
		return this._selectedButtonIndex;
	},

	/**
	 * @see    http://moobile.net/api/0.1/Control/List#setSelectedItem
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1
	 */
	clearSelectedButton: function() {
		this.setSelectedButton(null);
		return this;
	},

	/**
	 * @see    http://moobile.net/api/0.1/Control/List#setSelectedItem
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1
	 */
	addButton: function(button, where) {
		return this.addChild(button, where, context);
	},

	/**
	 * @see    http://moobile.net/api/0.1/Control/List#setSelectedItem
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1
	 */
	addButtonAfter: function(button, after) {
		return this.addChildAfter(button, after);
	},

	/**
	 * @see    http://moobile.net/api/0.1/Control/List#setSelectedItem
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1
	 */
	addButtonBefore: function(button, before) {
		return this.addChildBefore(button, before);
	},

	/**
	 * @see    http://moobile.net/api/0.1/Control/List#setSelectedItem
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1
	 */
	getButton: function(name) {
		return this.getChild(name);
	},

	/**
	 * @see    http://moobile.net/api/0.1/Control/List#setSelectedItem
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1
	 */
	getButtonAt: function(index) {
		return this.getChilOfTypeAt(Moobile.Button, index);
	},

	/**
	 * @see    http://moobile.net/api/0.1/Control/List#setSelectedItem
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1
	 */
	removeButton: function(button) {
		return this.removeChild(button);
	},

	/**
	 * @see    http://moobile.net/api/0.1/Control/List#setSelectedItem
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1
	 */
	removeAllButtons: function() {
		return this.removeChildrenOfType(Moobile.Button);
	},

	/**
	 * @overrides
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1
	 */
	didAddChild: function(child) {
		this.parent(child);
		if (child instanceof Moobile.Button) {
			child.addEvent('tap', this.bound('onButtonTap'));
		}
	},

	/**
	 * @overrides
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1
	 */
	didRemoveChild: function(child) {
		this.parent(child);
		if (child instanceof Moobile.Button) {
			child.removeEvent('tap', this.bound('onButtonTap'));
		}
	},

	/**
	 * @protected
	 * @author Jean-Philippe Dery (jeanphilippe.dery@gmail.com)
	 * @since  0.1
	 */
	onButtonTap: function(e, sender) {
		this.setSelectedButton(sender);
	}

});

//------------------------------------------------------------------------------
// Roles
//------------------------------------------------------------------------------

Moobile.Component.defineRole('button-group', null, function(element) {
	var instance = Moobile.Component.create(Moobile.ButtonGroup, element, 'data-button-group');
	this.addChild(instance);
});

//------------------------------------------------------------------------------
// Styles
//------------------------------------------------------------------------------

Moobile.Component.defineStyle('horizontal', Moobile.ButtonGroup, {
	attach: function(element) { element.addClass('style-horizontal'); },
	detach: function(element) { element.removeClass('style-horizontal'); }
});

Moobile.Component.defineStyle('vertical', Moobile.ButtonGroup, {
	attach: function(element) { element.addClass('style-vertical'); },
	detach: function(element) { element.removeClass('style-vertical'); }
});
