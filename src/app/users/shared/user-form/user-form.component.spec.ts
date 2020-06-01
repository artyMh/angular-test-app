import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form.component';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFormComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    component.user = {
      avatar: 'http://test-asd.com/img.jpg',
      email: 'test-asd@test-asd.com',
      first_name: 'John',
      last_name: 'Smith',
      id: 1
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have all correct inputs', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('input[id=id]').value).toBe('1');
    expect(compiled.querySelector('input[id=first_name]').value).toBe('John');
    expect(compiled.querySelector('input[id=last_name]').value).toBe('Smith');
    expect(compiled.querySelector('input[id=email]').value).toBe('test-asd@test-asd.com');
    expect(compiled.querySelector('input[id=avatar]').value).toBe('http://test-asd.com/img.jpg');
  });
});
