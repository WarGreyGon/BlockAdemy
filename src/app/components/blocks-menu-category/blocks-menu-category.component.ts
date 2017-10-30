import { Component, OnInit, Input, Output, EventEmitter, Optional } from '@angular/core';
import { BlocksMenuComponent } from '../blocks-menu/blocks-menu.component'
import { BlocksMenuCategory } from '../../own-objects/blocks-menu-category';


@Component({
    selector: 'blocks-menu-category',
    templateUrl: './blocks-menu-category.component.html',
    styleUrls: ['./blocks-menu-category.component.css']
})


export class BlocksMenuCategoryComponent implements OnInit {

    @Input() category: BlocksMenuCategory;
    @Input() isCollapsed : boolean = true;

    public categoryName : string;


    constructor(@Optional() private blocksMenuComponent: BlocksMenuComponent ) {

    }


    ngOnInit() {

        this.categoryName = this.category.name;
        this.blocksMenuComponent.registerMenuCategory(this);
    }


    public onCategoryClicked() : void {

        this.blocksMenuComponent.collapseCategoriesExcept(this.categoryName);
    }
}
