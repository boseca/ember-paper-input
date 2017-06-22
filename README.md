# ember-paper-input


An animated floating label addon for Ember.

![Floating Label](http://imgur.com/XBgKvMR.gif)

## Install

```bash
ember install ember-paper-input
```

or add the addon in your package.json file
```bash
"ember-paper-input": "git+https://github.com/boseca/ember-paper-input.git"
```

## Usage

```hbs
{{#ember-paper-input}}
	{{input id="txt-firstname" type="text" required=true placeholder='John'}}
	<label for="txt-firstname">First name</label>
{{/ember-paper-input}}
```
