/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"exercise2group2/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
