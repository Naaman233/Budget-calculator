import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBudgetItemListComponent } from './edit-budget-item-list.component';

describe('EditBudgetItemListComponent', () => {
  let component: EditBudgetItemListComponent;
  let fixture: ComponentFixture<EditBudgetItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBudgetItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBudgetItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
