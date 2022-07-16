import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabythaComponent } from './tabytha.component';

describe('TabythaComponent', () => {
  let component: TabythaComponent;
  let fixture: ComponentFixture<TabythaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabythaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabythaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
