import { Directive, HostListener, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[draggableInWhiteboard]'
})
export class DraggableInWhiteboardDirective {

    @HostListener('dragstart', ['$event'])
    onDragStart(event: any){

        event.dataTransfer.effectAllowed = 'move';
    }

    @HostListener('dragend', ['$event'])
    onDragEnd(event: any) {

        console.log(event.pageY, event.pageX)
        let dragEl = this.viewContainerRef.element.nativeElement as HTMLElement;
        dragEl.style.top = (event.pageY - (event.toElement.offsetHeight/2)) + 'px';
        dragEl.style.left = (event.pageX - (event.toElement.offsetWidth/2)) + 'px';
    }

  constructor(private viewContainerRef: ViewContainerRef) { }

}
