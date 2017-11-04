import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocksMenuCategoryItemComponent } from './blocks-menu-category-item.component';

describe('BlocksMenuCategoryItemComponent', () => {
  let component: BlocksMenuCategoryItemComponent;
  let fixture: ComponentFixture<BlocksMenuCategoryItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocksMenuCategoryItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocksMenuCategoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
