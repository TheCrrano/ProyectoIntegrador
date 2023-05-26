import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialDeVentaComponent } from './historial-de-venta.component';

describe('HistorialDeVentaComponent', () => {
  let component: HistorialDeVentaComponent;
  let fixture: ComponentFixture<HistorialDeVentaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistorialDeVentaComponent]
    });
    fixture = TestBed.createComponent(HistorialDeVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
