import { Component, OnInit, Input } from '@angular/core';
import { BlockBasicInfo } from '../../model/block-basic-info';


@Component({
    selector: 'block',
    templateUrl: './block.component.html',
    styleUrls: ['./block.component.css']
})


export class BlockComponent implements OnInit {

    @Input() myBasicInfo: BlockBasicInfo;
    private initialXPosition: string;
    private initialYPosition: string;


    constructor() {

    }

    ngOnInit() {

        this.initialXPosition = this.myBasicInfo.xPosistion + "px";
        this.initialYPosition = this.myBasicInfo.yPosistion + "px";
    }
}
