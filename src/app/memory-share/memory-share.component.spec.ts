import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryShareComponent } from './memory-share.component';

describe('MemoryShareComponent', () => {
  let component: MemoryShareComponent;
  let fixture: ComponentFixture<MemoryShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoryShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
