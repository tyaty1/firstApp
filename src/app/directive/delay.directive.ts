import { Directive, Input, ViewChild, ViewContainerRef, TemplateRef, ElementRef } from '@angular/core';


@Directive({
  selector: '[appDelay]'
})
export class DelayDirective {

  constructor(
    private vc: ViewContainerRef,
    private tr: TemplateRef<any>,
    //private el: ElementRef
  ) { }

  @Input() set appDelay(time) {
    let delayTimeout = setTimeout(() => {
      clearTimeout(delayTimeout);
      //console.log(this.el);
      this.vc.createEmbeddedView(this.tr);
    }, time);
  }
}
