import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {EmbedFooterComponent} from './embed-footer.component';

describe('EmbedFooterComponent', () => {
  let component: EmbedFooterComponent;
  let fixture: ComponentFixture<EmbedFooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [EmbedFooterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbedFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
