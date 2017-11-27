import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'blocks-link',
    templateUrl: './blocks-link.component.html',
    styleUrls: ['./blocks-link.component.css']
})
export class BlocksLinkComponent implements OnInit {

    @Input() public sideToPlace: string = "";

    constructor() { }

    ngOnInit() {
    }
}
