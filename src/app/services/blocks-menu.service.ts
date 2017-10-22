import { Injectable } from '@angular/core';

import { SubOption } from '../own-objects/sub-option';
import { BLOCKSMENUSUBOPTIONS } from '../mocked-data/mock-blocks-menu-options';


@Injectable()
export class BlocksMenuService {


    constructor() { }


    public getSubOptions(): Promise<SubOption[]> {

        return Promise.resolve(BLOCKSMENUSUBOPTIONS);
    }
}
