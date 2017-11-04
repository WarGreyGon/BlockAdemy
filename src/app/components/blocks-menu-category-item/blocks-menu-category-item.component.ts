import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'blocks-menu-category-item',
    templateUrl: './blocks-menu-category-item.component.html',
    styleUrls: ['./blocks-menu-category-item.component.css']
})


export class BlocksMenuCategoryItemComponent implements OnInit {


    @Input() name: string;

    constructor() {

    }

    ngOnInit() {
    }


    public onClick(event: Event): void {

        event.stopPropagation();
    }

    public onDragStart(event: any) : void {

        // console.log("dragStart");
        event.dataTransfer.effectAllowed = 'move';
    }

    public onDrag(event: any) : void {

        event.dataTransfer.setData("text", event.target.id);
        // console.log("dragging")
    }

    public onDragEnd(event: Event) : void {

        // console.log("dragEnd")
    }
}
