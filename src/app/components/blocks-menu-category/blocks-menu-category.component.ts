import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BlocksMenuCategory } from '../../own-objects/blocks-menu-category';


@Component({
    selector: 'blocks-menu-category',
    templateUrl: './blocks-menu-category.component.html',
    styleUrls: ['./blocks-menu-category.component.css']
})


export class BlocksMenuCategoryComponent implements OnInit {

    @Input() category: BlocksMenuCategory;
    @Input() isCollapsed : boolean = true;
    @Output() categoryClicked : EventEmitter<string> = new EventEmitter<string>();

    public categoryName : string;


    constructor() { }

    ngOnInit() {
    }


    public onCategoryClicked() : void {

        this.categoryClicked.emit(this.category.name);
    }
}
