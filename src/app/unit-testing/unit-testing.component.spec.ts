import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTestingComponent } from './unit-testing.component';

describe('UnitTestingComponent', () => {
  let component: UnitTestingComponent;
  let fixture: ComponentFixture<UnitTestingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnitTestingComponent]
    });
    fixture = TestBed.createComponent(UnitTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('checks whether given number is even or not', () => {
    expect(component.chekcEven(2)).toBe(1);
  });
});
