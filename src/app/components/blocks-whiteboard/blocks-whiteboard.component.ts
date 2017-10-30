import { Component, OnInit } from '@angular/core';

import { GarageComponent } from '../garage/garage.component'
import { BlocksMenuComponent } from '../blocks-menu/blocks-menu.component'


@Component({
    selector: 'blocks-whiteboard',
    templateUrl: './blocks-whiteboard.component.html',
    styleUrls: ['./blocks-whiteboard.component.css']
})


export class BlocksWhiteboardComponent implements OnInit {

    private blocksMenuComponent: BlocksMenuComponent;

    constructor(private garageComponent: GarageComponent) { }

    ngOnInit() {

        this.blocksMenuComponent = this.garageComponent.blocksMenuComponent;
    }


    public hideBlocksMenu(): void {

        this.blocksMenuComponent.menuIsHidden = true;
    }
}
