import { Component, OnInit, ViewChild, Directive, Input } from '@angular/core';

import { BlocksMenuService } from '../../services/blocks-menu.service';
import { BlocksMenuCategory } from '../../own-objects/blocks-menu-category';
import { BlocksMenuCategoryComponent } from '../blocks-menu-category/blocks-menu-category.component';


@Component({
    selector: 'blocks-menu',
    templateUrl: './blocks-menu.component.html',
    styleUrls: ['./blocks-menu.component.css']
})


export class BlocksMenuComponent implements OnInit {

    @Input() private menuIsHidden: boolean = false;
    private menuCategories: BlocksMenuCategory[];
    private menuCategoryComponents: BlocksMenuCategoryComponent[];


    constructor(private blockMenuservice: BlocksMenuService) {

        this.blockMenuservice.getSubOptions().then(menuCategories => this.menuCategories = menuCategories);
        this.menuCategoryComponents = [];
    }

    ngOnInit() { }


    public registerMenuCategory(menuCategory: BlocksMenuCategoryComponent) : void {

        this.menuCategoryComponents.push(menuCategory);
    }

    public collapseCategoriesExcept(categoryName: string) : void {

        this.menuCategoryComponents.forEach(cat => {
            cat.isCollapsed = (categoryName == cat.categoryName)? ((cat.isCollapsed)? false : true) : true;
        });
    }

    public showBlockMenu() : void {

        this.menuIsHidden = true;
    }
}
