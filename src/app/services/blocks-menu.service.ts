import { Injectable } from '@angular/core';

import { BLOCKSMENUSUBOPTIONS } from '../mocked-data/mock-blocks-menu-options';


@Injectable()
export class BlocksMenuService {


    constructor() { }


    public getSubOptions(): Promise<string[]> {

        return Promise.resolve(BLOCKSMENUSUBOPTIONS);
    }
}
