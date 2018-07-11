# ember-paper-input


An animated floating label addon for Ember.
Supports label text to be different from the placeholder (watermark) and also supports use of keyboard (e.g. tab,enter,...).

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

Example with required input.
```hbs
{{#ember-paper-input}}
	{{input id="txt-firstname" type="text" required=true placeholder='John'}}
	<label for="txt-firstname">First name</label>
{{/ember-paper-input}}
```

Example with non-required input.
```hbs
{{#ember-paper-input selected=model.address}}
	{{input value=model.address type="text" placeholder="123 Lawrence"}}
	<label>Address</label>
{{/ember-paper-input}}
```

Example with 3rd party controls (in this case `power-select` control). 
The addon will observe the value of `selected` and when it's changed it will animate the label.
```hbs
{{#ember-paper-input selected=selectedCountry}}
	{{#power-select selected=selectedCountry options=countryList searchField="country" placeholder="Country" onchange=(action (mut selectedCountry)) as |country|}}
		{{country.country}}
	{{/power-select}}
	<label>Country</label>
{{/ember-paper-input}}

```
