import { EffectsDirective } from './effects.directive';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';


@Component({
  template: `<p appEffects>hello world</p>`
})
class MockEffectsComponent { }

describe('EffectsDirective', () => {
  let component: MockEffectsComponent;
  let fixture: ComponentFixture<MockEffectsComponent>;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockEffectsComponent, EffectsDirective]
    });

    fixture = TestBed.createComponent(MockEffectsComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.css('p'));
  });

  it('should create an instance', () => {
    const directive = new EffectsDirective();
    expect(directive).toBeTruthy();
  });

  it('hover on the paragrah', () => {
    debugElement.triggerEventHandler('mouseover', null);
    fixture.detectChanges();
    expect(debugElement.nativeElement.style.color).toBe('green');

    debugElement.triggerEventHandler('mouseout', null);
    fixture.detectChanges();
    expect(debugElement.nativeElement.style.color).toBe('red');
  })
});
