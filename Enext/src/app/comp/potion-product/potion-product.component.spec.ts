import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotionProductComponent } from './potion-product.component';

describe('PotionProductComponent', () => {
  let component: PotionProductComponent;
  let fixture: ComponentFixture<PotionProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PotionProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PotionProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
