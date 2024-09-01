import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GalarzaCarrenoTablaPage } from './galarza-carreno-tabla.page';

describe('GalarzaCarrenoTablaPage', () => {
  let component: GalarzaCarrenoTablaPage;
  let fixture: ComponentFixture<GalarzaCarrenoTablaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GalarzaCarrenoTablaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
