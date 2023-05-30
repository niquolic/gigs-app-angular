import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGigsComponent } from './add-gigs.component';

describe('AddGigsComponent', () => {
  let component: AddGigsComponent;
  let fixture: ComponentFixture<AddGigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGigsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
