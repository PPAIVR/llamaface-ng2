import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupDetailsComponent } from './signup-details.component';

describe('SignupDetailsComponent', () => {
  let component: SignupDetailsComponent;
  let fixture: ComponentFixture<SignupDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
