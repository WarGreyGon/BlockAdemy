import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocksLinkComponent } from './blocks-link.component';

describe('BlocksLinkComponent', () => {
  let component: BlocksLinkComponent;
  let fixture: ComponentFixture<BlocksLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocksLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocksLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
