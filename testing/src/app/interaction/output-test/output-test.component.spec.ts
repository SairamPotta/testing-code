import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputTestComponent } from './output-test.component';

describe('OutputTestComponent', () => {
  let component: OutputTestComponent;
  let fixture: ComponentFixture<OutputTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the emit data', () => {
    spyOn(component.emitData, 'emit');
    component.sendData();
    fixture.detectChanges();
    expect(component.emitData.emit).toHaveBeenCalled();
  });
});
