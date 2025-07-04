import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesView } from './resources-view';

describe('ResourcesView', () => {
  let component: ResourcesView;
  let fixture: ComponentFixture<ResourcesView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourcesView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourcesView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
