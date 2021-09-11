import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AliAndJustinComponent } from './ali-and-justin.component';

describe('AliAndJustinComponent', () => {
  let component: AliAndJustinComponent;
  let fixture: ComponentFixture<AliAndJustinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AliAndJustinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AliAndJustinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
