import { Directive, ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appChangecolor]'
})
export class ChangecolorDirective {

  constructor(private el: ElementRef, private renderer: Renderer) {
    this.ChangeBgColor('red');
}
ChangeBgColor(color: string) {
    this.renderer.setElementStyle(this.el.nativeElement, 'color', color);
}

@HostListener('click') onClick() {
  this.ChangeBgColor('green');
}

@HostListener('mouseover') onMouseover(){
  this.ChangeBgColor('Blue');
}
@HostListener('mouseleave') onmouseleave(){
  this.ChangeBgColor("yellow");
}

@HostBinding('style.border') border: string; 

@HostListener('mouseover') onmouseover(){
  this.border = '5px solid red';
}
}
