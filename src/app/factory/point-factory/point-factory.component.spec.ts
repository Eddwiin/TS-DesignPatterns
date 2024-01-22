import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointFactoryComponent } from './point-factory.component';

describe('PointFactoryComponent', () => {
  let component: PointFactoryComponent;
  let fixture: ComponentFixture<PointFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PointFactoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PointFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
