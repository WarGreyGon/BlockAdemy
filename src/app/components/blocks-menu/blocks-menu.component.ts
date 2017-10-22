import { Component, OnInit } from '@angular/core';

import { BlocksMenuService } from '../../services/blocks-menu.service';
import { SubOption } from '../../own-objects/sub-option';


@Component({
    selector: 'blocks-menu',
    templateUrl: './blocks-menu.component.html',
    styleUrls: ['./blocks-menu.component.css']
})


export class BlocksMenuComponent implements OnInit {

    private subOptions: SubOption[];


    constructor(private blockMenuservice: BlocksMenuService) {

        this.blockMenuservice.getSubOptions().then(subOptions => this.subOptions = subOptions);
    }

    ngOnInit() { }

}
