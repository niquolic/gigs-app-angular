import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsGigsComponent } from './stats-gigs.component';

describe('StatsGigsComponent', () => {
  let component: StatsGigsComponent;
  let fixture: ComponentFixture<StatsGigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsGigsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsGigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
