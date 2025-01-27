const BrowserInterfacePuppeteer = require( './lib/browser-interface-puppeteer' );
const BrowserInterfaceIframe = require( './lib/browser-interface-iframe' );
const generateCriticalCSS = require( './lib/generate-critical-css' );
const { SuccessTargetError } = require( './lib/errors' );

module.exports = {
	BrowserInterfaceIframe,
	BrowserInterfacePuppeteer,
	generateCriticalCSS,
	SuccessTargetError,
};
