import { Component, OnInit } from '@angular/core';

import { BlocksMenuService } from '../../services/blocks-menu.service';
import { BlocksMenuCategory } from '../../own-objects/blocks-menu-category';


@Component({
    selector: 'blocks-menu',
    templateUrl: './blocks-menu.component.html',
    styleUrls: ['./blocks-menu.component.css']
})


export class BlocksMenuComponent implements OnInit {

    private menuIsHidden: boolean = false;
    private menuCategories: BlocksMenuCategory[];


    constructor(private blockMenuservice: BlocksMenuService) {

        this.blockMenuservice.getSubOptions().then(menuCategories => this.menuCategories = menuCategories);
    }

    ngOnInit() { }


    public showBlockMenu() : void {

        this.menuIsHidden = true;
    }

}
