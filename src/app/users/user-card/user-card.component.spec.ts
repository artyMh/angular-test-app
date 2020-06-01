import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserCardComponent } from './user-card.component';
import { User } from 'src/app/core/models/user.model';

describe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardComponent);
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

  it('user name renders correctly', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.user-name a').textContent).toBe('John Smith');
  });

  it('user avatar renders correctly', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.user-avatar img').src).toBe('http://test-asd.com/img.jpg');
  });
});
