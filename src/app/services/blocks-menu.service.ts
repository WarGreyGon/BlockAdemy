import { Injectable } from '@angular/core';

import { BlocksMenuCategory } from '../model/blocks-menu-category';
import { BLOCKSMENUCATEGORIES } from '../mocked-data/mock-blocks-menu-options';


@Injectable()
export class BlocksMenuService {


    constructor() { }


    public getSubOptions(): Promise<BlocksMenuCategory[]> {

        return Promise.resolve(BLOCKSMENUCATEGORIES);
    }
}
