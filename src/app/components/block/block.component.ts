import { Component, OnInit, Input, HostBinding, EventEmitter, Output, ElementRef, AfterViewInit } from '@angular/core';
import { BlockBasicInfo } from '../../model/block-basic-info';


@Component({
    selector: 'block',
    templateUrl: './block.component.html',
    styleUrls: ['./block.component.css']
})


export class BlockComponent implements OnInit {

    public name: string = "Block";


    constructor(public elementRef: ElementRef) {

    }

    ngOnInit() {
    }


    public onDragStart(event: any) : void {

        event.dataTransfer.effectAllowed = 'move';
    }

    public onDrag(event: any) : void {

    }

    public onDragEnd(event: any) : void {

        let dragEl = this.elementRef.nativeElement;
        dragEl.style.top = (event.pageY - (event.toElement.offsetHeight/2)) + 'px';
        dragEl.style.left = (event.pageX - (event.toElement.offsetWidth/2)) + 'px';
    }
}
