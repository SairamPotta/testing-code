import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appEffects]'
})
export class EffectsDirective {

  constructor() { }
  @HostBinding('style.color') color: string;

  @HostListener('mouseover') onHover() {
    this.color = 'green';
  }

  @HostListener('mouseout') onLeave() {
    this.color = 'red';
  }
}
