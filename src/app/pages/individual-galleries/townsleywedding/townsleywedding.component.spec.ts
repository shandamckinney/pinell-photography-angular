import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TownsleyweddingComponent } from './townsleywedding.component';

describe('TownsleyweddingComponent', () => {
  let component: TownsleyweddingComponent;
  let fixture: ComponentFixture<TownsleyweddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TownsleyweddingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TownsleyweddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
