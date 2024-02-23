import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeElementComponent } from './coffee-element.component';

describe('CoffeeElementComponent', () => {
  let component: CoffeeElementComponent;
  let fixture: ComponentFixture<CoffeeElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoffeeElementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoffeeElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
