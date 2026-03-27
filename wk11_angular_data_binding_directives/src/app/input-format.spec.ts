import { ElementRef } from '@angular/core';
import { InputFormat } from './input-format';

describe('InputFormat', () => {
  it('should create an instance', () => {
    const el = new ElementRef(null);
    const directive = new InputFormat(el);
    expect(directive).toBeTruthy();
  });
});
