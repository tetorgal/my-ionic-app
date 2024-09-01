import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudOperationsPage } from './crud-operations.page';

describe('CrudOperationsPage', () => {
  let component: CrudOperationsPage;
  let fixture: ComponentFixture<CrudOperationsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudOperationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
