import { TestBed, inject } from '@angular/core/testing';

import { BlocksMenuService } from './blocks-menu.service';

describe('BlocksMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlocksMenuService]
    });
  });

  it('should be created', inject([BlocksMenuService], (service: BlocksMenuService) => {
    expect(service).toBeTruthy();
  }));
});
