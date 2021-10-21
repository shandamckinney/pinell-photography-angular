import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaraAndClanceyComponent } from './tara-and-clancey.component';

describe('TaraAndClanceyComponent', () => {
  let component: TaraAndClanceyComponent;
  let fixture: ComponentFixture<TaraAndClanceyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaraAndClanceyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaraAndClanceyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
