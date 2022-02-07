import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerNavigationComponent } from './banner-navigation.component';

describe('BannerNavigationComponent', () => {
  let component: BannerNavigationComponent;
  let fixture: ComponentFixture<BannerNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
