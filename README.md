# Ember.js Applications
+ Building a complex web application with Ember.js Octane
  + https://yoember.com/
  + https://github.com/zoltan-nz/library-app/
  + https://github.com/gtechsltn/library-app/
+ Building Ambitious Web Applications with Ember.js
  + https://davidwalsh.name/ember-web-apps
+ A Step-by-Step Guide: Ember on Netlify
  + https://www.netlify.com/blog/2015/11/24/a-step-by-step-guide-ember-on-netlify/
+ What's Ember.js?
  + https://www.trio.dev/blog/what-is-ember-js
  + https://www.geeksforgeeks.org/emberjs-application-concerns/
+ Ember.js 2.0 Example App With Firebase And Login Authentication
  + https://www.programwitherik.com/emberjs_2-0_example_app_with_firebase/
+ 11 Ember.js Resources You Must Check Out
  + https://www.netguru.com/blog/emberjs-resources
+ Top 5 Ember.js Tutorials and Resources for Beginners
  + https://www.youtube.com/watch?v=yZTSFWpZe8I
+ Learning Ember: The Easier Way
  + https://productive.io/engineering/learning-ember-easier-way/
+ https://learn.habilelabs.io/everything-you-need-to-know-about-ember-js-487ee9a686c2

# Working with HTML, CSS, and JavaScript - Getting Started
+ https://guides.emberjs.com/release/getting-started/working-with-html-css-and-javascript/

# Where do 3rd party JS libraries (or Vendor)?
+ ember-auto-import
+ [3rd Party libraries with CDN](https://reintech.io/blog/best-practices-for-working-with-third-party-libraries-in-javascript)
+ [Best practices to select CDN for 3rd party library](https://blog.akansh.com/best-practices-to-select-cdn-for-third-party-libraries/)
+ https://guides.emberjs.com/v2.8.0/addons-and-dependencies/
+ https://stackoverflow.com/questions/36586043/how-can-i-bundle-javascript-files-under-vendor-in-an-ember-cli-project
+ https://stackoverflow.com/questions/30397093/where-do-3rd-party-js-libraries-go
+ https://stackoverflow.com/questions/44509802/ember-js-use-of-vendor-directory
+ https://stackoverflow.com/questions/26544578/how-to-use-third-party-npm-packages-with-ember-cli-app

## Third Party Libraries
+ https://www.npmjs.com/package/ember-cli
+ https://www.npmjs.com/package/ember-data
+ https://www.npmjs.com/package/ember-source
+ https://cdnjs.com/libraries/jquery
+ https://cdnjs.com/libraries/bootstrap
+ https://cdnjs.com/libraries/twitter-bootstrap

# Ember-CLI

```
# Update Ember CLI projects
npm install -g ember-cli-update
ember-cli-update

# Long Term Support (LTS) releases
npm install --save-dev ember-source@~5.4.0

# Install SASS
npm install --save ember-cli-sass

# Install jQuery 3
npm install --save-dev jquery@^3.0
ember install @ember/jquery

# Install Bootstrap 4
npm install --save-dev bootstrap@^4.0
npm install ember-cli-bootstrap-4
ember install ember-cli-bootstrap-4
```

### Bootstrap 4 and Sass
+ ember install ember-cli-bootstrap-4
+ [ember-cli-bootstrap-4](https://www.npmjs.com/package/ember-cli-bootstrap-4)
+ bootstrap, ember-cli-sass, sass
+ bootstrap@^4.6.1, ember-cli-sass@^10.0.0 and sass@^1.23.0
+ Glyphicons from Bootstrap 3 are not supported in Bootstrap 4  => Alternative of Glyphicons of Bootstrap 3
  + Font Awesome
  + Google Material Design Icons

```
"devDependencies": {
  "bootstrap": "^4.6.1",
  "sass": "^1.23.0",
},
"dependencies": {
  "ember-cli-bootstrap-4": "^1.0.0",
  "ember-cli-sass": "^10.0.0",
  "popper.js": "^1.16.1"
}
```

### Font Awesome 5 Free
+ Font Awesome 6 (comming soon)](https://fontawesome.com/docs/web/use-with/ember)
+ [Font Awesome 5 Free](https://fontawesome.com/v5/docs/web/use-with/ember)
+ https://fontawesome.com/v5/docs/web/setup/use-package-managers
+ https://snyk.io/advisor/npm-package/@fortawesome/ember-fontawesome
+ ember install @fortawesome/ember-fontawesome
+ [ember-fontawesome](https://github.com/FortAwesome/ember-fontawesome)
+ https://fontawesome.com/v5/search?f=brands&m=free
+ https://fontawesome.com/v5/search?s=regular&m=free
+ https://fontawesome.com/v5/search?s=solid&m=free

```
"devDependencies": {
  "@fortawesome/ember-fontawesome": "^2.0.0",
  "@fortawesome/free-brands-svg-icons": "^6.5.1",
  "@fortawesome/free-regular-svg-icons": "^6.5.1",
  "@fortawesome/free-solid-svg-icons": "^6.5.1",
},
"dependencies": {
  "@fortawesome/ember-fontawesome": "^2.0.0",
  "@fortawesome/free-brands-svg-icons": "^6.5.1",
  "@fortawesome/free-regular-svg-icons": "^6.5.1",
  "@fortawesome/free-solid-svg-icons": "^6.5.1",
}
```
 
## Ember.js Resources

### Discussion Forum
https://discuss.emberjs.com/

### Discord Community Chat
https://discord.com/invite/emberjs

### Ember CLI
https://cli.emberjs.com/release/

### Ember Addons
https://www.emberobserver.com/

### Guides Ember v2.9.0
+ https://guides.emberjs.com/v2.9.0/

### Build Ember Components
+ https://ember-guides-staging.firebaseapp.com/v2.8.0/tutorial/simple-component/
+ https://guides.emberjs.com/v2.14.0/tutorial/simple-component/
+ https://guides.emberjs.com/v5.4.0/components/
+ https://guides.emberjs.com/release/components/
+ Ember.js Octane vs Classic Cheat Sheet

```
# -gc stands for glimmer component
ember generate component my-component -gc
ember generate component my-component --component-class @glimmer/component

# -cc stands for classic component
ember generate component my-component -cc
```

### Ember.js Octane vs Classic Cheat Sheet
https://ember-learn.github.io/ember-octane-vs-classic-cheat-sheet/

### Glimmer Components
+ https://guides.emberjs.com/release/upgrading/current-edition/glimmer-components/
  + didInsertElement
  + willDestroyElement
  + ...
+ https://github.com/emberjs/ember.js/issues/16301

### Class Components
+ https://api.emberjs.com/ember/release/classes/component/
+ https://api.emberjs.com/ember/5.4/classes/Component

### DOM Events
+ [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
+ [DOM Events](https://dom.spec.whatwg.org/)
  + window.addEventListener
  + document.addEventListener(...)
  + document.body.addEventListener(...)
  + document.getElementById("x").dispatchEvent(ev);

```
my_element.addEventListener("click", function (e) {
  console.log(this.className); // logs the className of my_element
  console.log(e.currentTarget === this); // logs `true`
});
```

```
my_element.addEventListener("click", (e) => {
  console.log(this.className); // WARNING: `this` is not `my_element`
  console.log(e.currentTarget === this); // logs `false`
});
```

### What's Ember Run Loop?
https://api.emberjs.com/ember/5.4/functions/@ember%2Frunloop/bind

### Ember Learn
https://emberjs.com/learn/
 
### Ember Guides
https://guides.emberjs.com

## Ember API (HAY HAY HAY)
+ https://api.emberjs.com/ember/
+ https://api.emberjs.com/ember/5.4

### Ember Screencasts
https://www.emberscreencasts.com/

### Yo Ember (HAY HAY HAY)
http://yoember.com/

### Ember Way
https://emberway.io/

### Ember Igniter
https://emberigniter.com/

### Ember CLI 101
https://leanpub.com/ember-cli-101

# Google
+ "Component Templates" site:rfcs.emberjs.com

# Blogs
+ http://yoember.com/
+ https://pzuraq.com/

# Alternative of

## Alternative of Bootstrap 4 popover => ember-tooltips
+ https://getbootstrap.com/docs/4.0/components/popovers/
+ https://www.w3schools.com/bootstrap4/bootstrap_popover.asp
+ [ember install ember-tooltips](https://github.com/sir-dunxalot/ember-tooltips)
+ https://sir-dunxalot.github.io/ember-tooltips/

## Alternative of Alpaca => ???
+ https://npms.io/search?q=ember-forms
+ https://emberobserver.com/categories/forms
+ https://emberobserver.com/addons/ember-form-builder

# Source Code Samples
+ [Ember v3](https://github.com/muhammadnaumanshahid/simple-ember-application)
+ [Ember v4](https://github.com/zoltan-nz/library-app)
+ [Ember v5](https://github.com/gtechsltn/PowerShellAutomation)
+ [Ember v5.4](https://github.com/gtechsltn/ember-research/)
