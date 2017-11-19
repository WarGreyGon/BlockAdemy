import { Component, OnInit } from '@angular/core';
import { BlocksMenuComponent } from './blocks-menu/blocks-menu.component';


@Component({
    selector: 'garage',
    templateUrl: './garage.component.html',
    styleUrls: ['./garage.component.css']
})


export class GarageComponent implements OnInit {


    public blocksMenuComponent: BlocksMenuComponent;

    constructor() { }

    ngOnInit() {
    }
}
