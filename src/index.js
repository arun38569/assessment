// Import lit-html functions
import { html, render } from 'lit-html';
import { LitElement} from 'lit-element'; 
import '@lion/input/lion-input.js';
import {MaxLength,MinMaxLength,Required} from '@lion/validate';
import {MyValidator} from './validator/custom-validator.js';
import {LocalizeMixin,localize} from '@lion/localize';

class MyApp extends LocalizeMixin(LitElement) { 

  static get properties() {
    return { myProp: String };
  }

  constructor(){
    super();
    
  }

  render() {
    return   html
    `
    <lion-input
    .validators="${[new MaxLength(7, { getMessage: () => 'Max 7 Char please...' }),new Required('', { getMessage: () =>'Please provide some value..'})]}"
    .modelValue="${'saurojit'}"
    .placeholder="${'Please Enter First Name here'}"
    label="First Name"
  ></lion-input>

  <div aria-live="polite">
    <p>${localize.msg('en-GB:I am from England')}</p>
  </div>


    `;
  }
}

customElements.define('my-app', MyApp); 