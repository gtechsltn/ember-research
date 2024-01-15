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

### Font Awesome 5
+ https://fontawesome.com/docs/web/use-with/ember
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
https://guides.emberjs.com/v2.9.0/

### Ember Learn
https://emberjs.com/learn/
 
### Ember Guides
https://guides.emberjs.com

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
