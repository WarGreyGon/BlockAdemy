import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'blocks-menu-category-item',
    templateUrl: './blocks-menu-category-item.component.html',
    styleUrls: ['./blocks-menu-category-item.component.css']
})


export class BlocksMenuCategoryItemComponent implements OnInit {


    @Input() name: string;
    private className: string = "MenuBlockItem"

    constructor() {

    }

    ngOnInit() {
    }


    public onClick(event: Event): void {

        event.stopPropagation();
    }

    public onDragStart(event: any) : void {

        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('Text', this.className);
    }

    public onDrag(event: any) : void {

    }

    public onDragEnd(event: Event) : void {

    }
}
