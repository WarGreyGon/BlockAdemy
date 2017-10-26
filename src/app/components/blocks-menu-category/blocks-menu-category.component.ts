import { Component, OnInit, Input } from '@angular/core';
import { BlocksMenuCategory } from '../../own-objects/blocks-menu-category';


@Component({
    selector: 'blocks-menu-category',
    templateUrl: './blocks-menu-category.component.html',
    styleUrls: ['./blocks-menu-category.component.css']
})


export class BlocksMenuCategoryComponent implements OnInit {

    @Input() category: BlocksMenuCategory;


    constructor() { }

    ngOnInit() {
    }

}
