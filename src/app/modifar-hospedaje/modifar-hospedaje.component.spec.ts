import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifarHospedajeComponent } from './modifar-hospedaje.component';

describe('ModifarHospedajeComponent', () => {
  let component: ModifarHospedajeComponent;
  let fixture: ComponentFixture<ModifarHospedajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifarHospedajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifarHospedajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
