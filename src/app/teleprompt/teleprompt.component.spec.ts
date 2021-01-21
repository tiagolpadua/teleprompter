import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelepromptComponent } from './teleprompt.component';

describe('TelepromptComponent', () => {
  let component: TelepromptComponent;
  let fixture: ComponentFixture<TelepromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelepromptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelepromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
