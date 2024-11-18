import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarHospedajeComponent } from './eliminar-hospedaje.component';

describe('EliminarHospedajeComponent', () => {
  let component: EliminarHospedajeComponent;
  let fixture: ComponentFixture<EliminarHospedajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarHospedajeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarHospedajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
