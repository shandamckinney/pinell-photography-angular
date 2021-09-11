import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NickAndChadComponent } from './nick-and-chad.component';

describe('NickAndChadComponent', () => {
  let component: NickAndChadComponent;
  let fixture: ComponentFixture<NickAndChadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NickAndChadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NickAndChadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
