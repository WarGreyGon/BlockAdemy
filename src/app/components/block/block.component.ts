import { Component, OnInit, Input, HostBinding, EventEmitter, Output, ElementRef, AfterViewInit } from '@angular/core';
import { BlockBasicInfo } from '../../model/block-basic-info';


@Component({
    selector: 'block',
    templateUrl: './block.component.html',
    styleUrls: ['./block.component.css']
})


export class BlockComponent implements OnInit, AfterViewInit {

    public name: string = "Block";

    constructor() {

    }

    ngOnInit() {
    }

    ngAfterViewInit() {
    }
}
