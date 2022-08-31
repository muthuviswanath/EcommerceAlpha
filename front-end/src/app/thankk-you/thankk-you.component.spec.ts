import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankkYouComponent } from './thankk-you.component';

describe('ThankkYouComponent', () => {
  let component: ThankkYouComponent;
  let fixture: ComponentFixture<ThankkYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankkYouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThankkYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
