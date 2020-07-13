# CSCE 315 Project 2 Group 4

## Information for Developers

GUI design LiveMache link: <https://livemache.ecologylab.net/e/hWuFAqXXl?cX=0&cY=0&cZ=1>

### Instructions for compiling and running

Right now the website is hosted via GitHub pages here: <https://pages.github.tamu.edu/cameronmac21/315-Final-Project/>

NOTE: the following is outdated information from before we had to make last minute project switches

In order to prevent the API secrets getting on GitHub, there is an `api_secrets.js` file that is not included in source control because of its inclusion in `.gitignore`.
The contents of this file need to be:
```
let YELP_API_KEY = '';

module.exports = {
	YELP_API_KEY: YELP_API_KEY
};
```
With the yelp api key added.

There are also the `node_modules` folder, `package-lock.json`, and `browserified.js` files included in the `.gitignore`.

Compiling:
Install NPM and Node https://nodejs.org/en/
run `npm install` to install dependencies
run `node [filename]` if you want to test individual files
Install browserify http://browserify.org/
run `browserify js_html_interface.js -o browserified.js` to generate the single javascript file that is used by the html in browsers

### Branding Requirements

The APIs are free but have branding requirements:
<https://www.zillow.com/howto/api/BrandingRequirements.htm>
<https://www.mapbox.com/about/press/brand-guidelines/>
<https://www.yelp.com/developers/display_requirements>
