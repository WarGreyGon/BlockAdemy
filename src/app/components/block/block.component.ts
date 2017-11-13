import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { BlockBasicInfo } from '../../model/block-basic-info';


@Component({
    selector: 'block',
    templateUrl: './block.component.html',
    styleUrls: ['./block.component.css']
})


export class BlockComponent implements OnInit {

    @HostBinding('style.top.px')
    public initialXPosition: number = 0;
    @HostBinding('style.left.px')
    public initialYPosition: number = 0;
    @HostBinding('style.color')
    public color: string = "black";

    // @Input() myBasicInfo: BlockBasicInfo;
    public name: string = "";


    constructor() {

    }

    ngOnInit() {

    }
}
