import { Component, OnInit } from '@angular/core';

import { GarageComponent } from '../garage/garage.component'
import { BlocksMenuComponent } from '../blocks-menu/blocks-menu.component';
import { BlockBasicInfo } from '../../model/block-basic-info';


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

    public onDragEnter (event: Event) : void {

        // console.log("enter")
    }

    public onDragOver(event: any) : void {

        if (event.preventDefault) {
            event.preventDefault();
        }

        event.dataTransfer.dropEffect = 'move';
        // console.log("overing")
    }

    public onDrop (event: any) : void {

        event.stopPropagation();
        console.log("droped")
        console.log(event)
        let blockDroped: BlockBasicInfo =  {
            name : "test",
            xPosistion: event.pageX,
            yPosistion: event.pageY,
        };
        this.blockInfoList.push(blockDroped);
    }
}
