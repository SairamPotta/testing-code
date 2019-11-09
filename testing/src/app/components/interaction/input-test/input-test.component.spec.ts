import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTestComponent } from './input-test.component';
import { OutputTestComponent } from '../output-test/output-test.component';
import { EffectsDirective } from 'src/app/directives/effects.directive';

describe('InputTestComponent', () => {
  let component: InputTestComponent;
  let fixture: ComponentFixture<InputTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputTestComponent, OutputTestComponent, EffectsDirective]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call handleData', () => {
    expect(component.handleData('hello')).toBeUndefined();
  });
});
