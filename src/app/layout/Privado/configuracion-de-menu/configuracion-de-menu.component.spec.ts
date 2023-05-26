import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionDeMenuComponent } from './configuracion-de-menu.component';

describe('ConfiguracionDeMenuComponent', () => {
  let component: ConfiguracionDeMenuComponent;
  let fixture: ComponentFixture<ConfiguracionDeMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfiguracionDeMenuComponent]
    });
    fixture = TestBed.createComponent(ConfiguracionDeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
