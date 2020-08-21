import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { getElement } from '../../../spec-test-helpers'
import { BudgetItemCardComponent } from './budget-item-card.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'

describe('BudgetItemCardComponent', () => {
  let component: BudgetItemCardComponent;
  let fixture: ComponentFixture<BudgetItemCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetItemCardComponent ],
      imports: [FormsModule,
                ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
    
  // function getTopBar(){
  //   return getElement(fixture,'#top-bar')
  // }
  // fdescribe('Display Top bar',() =>{
  //   fit('it should display the top bar to the user',()=> {
  //     expect(getTopBar).toBeTruthy()
  //   })
  // })

});
