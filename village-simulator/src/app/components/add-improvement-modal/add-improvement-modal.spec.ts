import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImprovementModal } from './add-improvement-modal';

describe('AddImprovementModal', () => {
  let component: AddImprovementModal;
  let fixture: ComponentFixture<AddImprovementModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddImprovementModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddImprovementModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
