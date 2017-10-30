import { Component, OnInit, ViewChild, Directive, Input } from '@angular/core';

import { GarageComponent } from '../garage/garage.component'
import { BlocksMenuService } from '../../services/blocks-menu.service';
import { BlocksMenuCategory } from '../../own-objects/blocks-menu-category';
import { BlocksMenuCategoryComponent } from '../blocks-menu-category/blocks-menu-category.component';


@Component({
    selector: 'blocks-menu',
    templateUrl: './blocks-menu.component.html',
    styleUrls: ['./blocks-menu.component.css']
})


export class BlocksMenuComponent implements OnInit {

    @Input() public menuIsHidden: boolean = true;
    private menuCategories: BlocksMenuCategory[];
    private menuCategoryComponents: BlocksMenuCategoryComponent[];


    constructor(private blockMenuservice: BlocksMenuService, private garageComponent: GarageComponent) {

        this.blockMenuservice.getSubOptions().then(menuCategories => this.menuCategories = menuCategories);
        this.menuCategoryComponents = [];
    }

    ngOnInit() {

        this.garageComponent.blocksMenuComponent = this;
    }


    public registerMenuCategory(menuCategory: BlocksMenuCategoryComponent) : void {

        this.menuCategoryComponents.push(menuCategory);
    }

    public collapseCategoriesExcept(categoryName: string) : void {

        this.menuCategoryComponents.forEach(cat => {
            cat.isCollapsed = (categoryName == cat.categoryName)? ((cat.isCollapsed)? false : true) : true;
        });
    }

    public showBlockMenu() : void {

        this.menuIsHidden = false;
    }

    public onClick(event: Event): void {

        event.preventDefault();
    }
}
