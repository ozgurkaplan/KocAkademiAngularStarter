import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionInfoDetailComponent } from './question-info-detail.component';

describe('QuestionInfoDetailComponent', () => {
  let component: QuestionInfoDetailComponent;
  let fixture: ComponentFixture<QuestionInfoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionInfoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionInfoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
