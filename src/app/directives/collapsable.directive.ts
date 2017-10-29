import { Directive, ElementRef } from '@angular/core';


@Directive({
  selector: '[collapsable]'
})


export class CollapsableDirective {

  constructor(public element: ElementRef) {

  }
}
