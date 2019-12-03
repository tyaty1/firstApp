import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})


export class HighlightDirective {

  colors = ['red', 'green', 'blue'];

  @HostListener('click') onMouseClick() {
    let  index = Math.floor(Math.random() * this.colors.length);
    this.el.nativeElement.style.color = this.colors[index];
  }
  constructor(
    private el: ElementRef
  ) {
    this.changeColor('#FF9933');
  }

  changeColor(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }


  @Input() set appHighlight(color) {
    this.changeColor(color);
  }
}
