import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AshelyComponent } from './ashely.component';

describe('AshelyComponent', () => {
  let component: AshelyComponent;
  let fixture: ComponentFixture<AshelyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AshelyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AshelyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
