import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeTestComponentComponent } from './pipe-test-component.component';
import { PipeTestPipe } from '../pipe-test.pipe';

describe('PipeTestComponentComponent', () => {
  let component: PipeTestComponentComponent;
  let fixture: ComponentFixture<PipeTestComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeTestComponentComponent, PipeTestPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeTestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call isCalledFunction method', () => {
    spyOn(component, 'getData');
    component.isValidData = true;
    component.isCalledFunction();
    expect(component.getData).toHaveBeenCalled();
  });

  it('should call isCalledFunction method', () => {
    spyOn(component, 'getData');
    component.isValidData = true;
    component.isCalledFunction();
    expect(component.getData).toHaveBeenCalled();
  });

  it('should call isCalledFunction method', () => {
    spyOn(component, 'getData');
    component.isCalledFunction();
    expect(component.getData).toHaveBeenCalled();
  });

  it('should call isCalledFunction method', () => {
    expect(component.getData(true)).toBe('getData called functiontrue');
  });

});
