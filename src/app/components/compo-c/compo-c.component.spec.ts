import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoCComponent } from './compo-c.component';

describe('CompoCComponent', () => {
  let component: CompoCComponent;
  let fixture: ComponentFixture<CompoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompoCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
