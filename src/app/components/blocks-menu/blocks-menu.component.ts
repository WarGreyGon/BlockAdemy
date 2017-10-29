import { Component, OnInit, ViewChild, Directive, Input } from '@angular/core';

import { BlocksMenuService } from '../../services/blocks-menu.service';
import { CollapsableDirective } from '../../directives/collapsable.directive';
import { BlocksMenuCategory } from '../../own-objects/blocks-menu-category';


@Component({
    selector: 'blocks-menu',
    templateUrl: './blocks-menu.component.html',
    styleUrls: ['./blocks-menu.component.css']
})


export class BlocksMenuComponent implements OnInit {

    @Input() private menuIsHidden: boolean = false;
    private menuCategories: BlocksMenuCategory[];

    @ViewChild(CollapsableDirective)
    set blocksMenuCategory(directive: CollapsableDirective) {

    }

    constructor(private blockMenuservice: BlocksMenuService) {

        this.blockMenuservice.getSubOptions().then(menuCategories => this.menuCategories = menuCategories);
    }

    ngOnInit() { }


    public collapseCategoriesExcept(categoryName: string) : void {

    }

    public showBlockMenu() : void {

        this.menuIsHidden = true;
    }
}
