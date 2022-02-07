import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerContentComponent } from './banner-content.component';

describe('BannerContentComponent', () => {
  let component: BannerContentComponent;
  let fixture: ComponentFixture<BannerContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
