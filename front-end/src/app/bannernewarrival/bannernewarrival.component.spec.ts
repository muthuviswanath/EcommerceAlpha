import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannernewarrivalComponent } from './bannernewarrival.component';

describe('BannernewarrivalComponent', () => {
  let component: BannernewarrivalComponent;
  let fixture: ComponentFixture<BannernewarrivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannernewarrivalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannernewarrivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
