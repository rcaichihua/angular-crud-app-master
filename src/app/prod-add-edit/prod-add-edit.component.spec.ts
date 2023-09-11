import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdAddEditComponent } from './prod-add-edit.component';

describe('ProdAddEditComponent', () => {
  let component: ProdAddEditComponent;
  let fixture: ComponentFixture<ProdAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
