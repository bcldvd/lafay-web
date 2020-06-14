import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementTestComponent } from './placement-test.component';

describe('PlacementTestComponent', () => {
  let component: PlacementTestComponent;
  let fixture: ComponentFixture<PlacementTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacementTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
