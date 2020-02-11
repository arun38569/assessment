
import {Validator} from '@lion/validate'

export class MyValidator extends Validator {
    constructor(...args) {
      super(...args);
      this.name = 'myValidator';
    }
  
    execute(modelValue, param) {
      return modelValue !== param;
    }
  
    static getMessage({ fieldName, modelValue, params: param }) {
      if (modelValue.length > param) {
        return `Value should be less than 7`;
      }
    }
  }