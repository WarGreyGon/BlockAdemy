import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocksWhiteboardComponent } from './blocks-whiteboard.component';

describe('BlocksWhiteboardComponent', () => {
  let component: BlocksWhiteboardComponent;
  let fixture: ComponentFixture<BlocksWhiteboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocksWhiteboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocksWhiteboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
