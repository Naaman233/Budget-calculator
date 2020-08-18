import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChangesModalComponent } from './add-changes-modal.component';

describe('AddChangesModalComponent', () => {
  let component: AddChangesModalComponent;
  let fixture: ComponentFixture<AddChangesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChangesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChangesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
