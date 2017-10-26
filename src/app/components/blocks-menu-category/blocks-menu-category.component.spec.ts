import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocksMenuCategoryComponent } from './blocks-menu-category.component';

describe('BlocksMenuCategoryComponent', () => {
  let component: BlocksMenuCategoryComponent;
  let fixture: ComponentFixture<BlocksMenuCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocksMenuCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocksMenuCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
