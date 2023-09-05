import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallbackSpotifyComponent } from './callback-spotify.component';

describe('CallbackSpotifyComponent', () => {
  let component: CallbackSpotifyComponent;
  let fixture: ComponentFixture<CallbackSpotifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallbackSpotifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallbackSpotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
