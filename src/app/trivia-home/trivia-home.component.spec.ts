import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviaHomeComponent } from './trivia-home.component';

describe('TriviaHomeComponent', () => {
  let component: TriviaHomeComponent;
  let fixture: ComponentFixture<TriviaHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriviaHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriviaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
