import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGigFormComponent } from './edit-gig-form.component';

describe('EditGigFormComponent', () => {
  let component: EditGigFormComponent;
  let fixture: ComponentFixture<EditGigFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGigFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditGigFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
