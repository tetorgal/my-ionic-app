import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GalarzaCarrenoFormPage } from './galarza-carreno-form.page';

describe('GalarzaCarrenoFormPage', () => {
  let component: GalarzaCarrenoFormPage;
  let fixture: ComponentFixture<GalarzaCarrenoFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GalarzaCarrenoFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
