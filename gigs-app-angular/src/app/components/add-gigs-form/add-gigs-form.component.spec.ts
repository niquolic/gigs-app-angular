import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGigsFormComponent } from './add-gigs-form.component';

describe('AddGigsFormComponent', () => {
  let component: AddGigsFormComponent;
  let fixture: ComponentFixture<AddGigsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGigsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGigsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
