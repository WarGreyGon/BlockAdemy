import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocksMenuComponent } from './blocks-menu.component';

describe('BlocksMenuComponent', () => {
  let component: BlocksMenuComponent;
  let fixture: ComponentFixture<BlocksMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocksMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocksMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
