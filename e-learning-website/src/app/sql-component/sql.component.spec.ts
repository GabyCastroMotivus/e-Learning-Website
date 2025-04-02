import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlComponent } from './sqlCourse.component';

describe('SqlComponent', () => {
  let component: SqlComponent;
  let fixture: ComponentFixture<SqlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
