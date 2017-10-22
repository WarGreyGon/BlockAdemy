import { Component, OnInit } from '@angular/core';

import { BlocksMenuService } from '../../services/blocks-menu.service';


@Component({
    selector: 'blocks-menu',
    templateUrl: './blocks-menu.component.html',
    styleUrls: ['./blocks-menu.component.css']
})


export class BlocksMenuComponent implements OnInit {

    private subOptions: string[];


    constructor(private blockMenuservice: BlocksMenuService) {

        this.blockMenuservice.getSubOptions().then(subOptions => this.subOptions = subOptions);
    }

    ngOnInit() { }

}
