import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';

describe('TestComponent', () => {
  const obj=new TestComponent();
it('should create', () => {
    expect(obj.checkEven(2)).toBe(1);
  });
  it('should create', () => {
    expect(obj.checkOdd(1)).toBe(1);
  });
});
