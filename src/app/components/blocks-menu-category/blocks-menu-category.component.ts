import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BlocksMenuCategory } from '../../own-objects/blocks-menu-category';


@Component({
    selector: 'blocks-menu-category',
    templateUrl: './blocks-menu-category.component.html',
    styleUrls: ['./blocks-menu-category.component.css']
})


export class BlocksMenuCategoryComponent implements OnInit {

    @Input() category: BlocksMenuCategory;
    @Output() categoryClicked = new EventEmitter<string>();


    constructor() { }

    ngOnInit() {
    }

    private onCategoryClicked() : void {

        this.categoryClicked.emit(this.category.name);
        console.log(this.category.name)
    }
}
