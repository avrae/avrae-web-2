import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {NewPackDialog} from './new-pack-dialog.component';

describe('NewTomeDialog', () => {
  let component: NewPackDialog;
  let fixture: ComponentFixture<NewPackDialog>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NewPackDialog]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPackDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
