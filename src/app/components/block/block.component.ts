import { Component, OnInit, Input } from '@angular/core';
import { BlockBasicInfo } from '../../model/block-basic-info';


@Component({
    selector: 'block',
    templateUrl: './block.component.html',
    styleUrls: ['./block.component.css']
})


export class BlockComponent implements OnInit {

    @Input() myBasicInfo: BlockBasicInfo;


    constructor() {

    }

    ngOnInit() {

    }
}
