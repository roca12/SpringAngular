import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelayOnComponent } from './relay-on.component';

describe('RelayOnComponent', () => {
  let component: RelayOnComponent;
  let fixture: ComponentFixture<RelayOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelayOnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelayOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
