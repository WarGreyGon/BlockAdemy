import { Component, OnInit } from '@angular/core';

import { GarageComponent } from '../garage.component'
import { BlocksMenuComponent } from '../blocks-menu/blocks-menu.component';
import { BlockBasicInfo } from '../../../model/block-basic-info';


@Component({
    selector: 'blocks-whiteboard',
    templateUrl: './blocks-whiteboard.component.html',
    styleUrls: ['./blocks-whiteboard.component.css']
})


export class BlocksWhiteboardComponent implements OnInit {

    private blocksMenuComponent: BlocksMenuComponent;
    public blockInfoList: BlockBasicInfo[];

    constructor(private garageComponent: GarageComponent) {

        this.blockInfoList = [];
    }

    ngOnInit() {

        this.blocksMenuComponent = this.garageComponent.blocksMenuComponent;
    }


    public hideBlocksMenu(): void {

        this.blocksMenuComponent.menuIsHidden = true;
    }
}
