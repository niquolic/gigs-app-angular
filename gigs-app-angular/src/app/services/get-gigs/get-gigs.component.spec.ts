import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetGigsComponent } from './get-gigs.component';

describe('GetGigsComponent', () => {
  let component: GetGigsComponent;
  let fixture: ComponentFixture<GetGigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetGigsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetGigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
