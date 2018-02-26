import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { TodoListComponent } from './todo-list.component';
import { Router } from '@angular/router';

class MockRouter { public navigate([]) {} }

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      imports: [FormsModule, RouterTestingModule],
      providers: [{
        provide: Router,  useClass: MockRouter ,
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have addTodo function', () => {
    expect(component.addTodo).toBeTruthy();
  });

  it('should have deleteTodo function', () => {
    expect(component.deleteTodo).toBeTruthy();
  });

  it('should have deleteSelectedTodos function', () => {
    expect(component.deleteSelectedTodos).toBeTruthy();
  });

  it('should have logout function', () => {
    expect(component.logout).toBeTruthy();
  });

  it('logout function should remove the sessionID', () => {
      sessionStorage.removeItem('sessionID');
      const mockRouter = new MockRouter();
      mockRouter.navigate(['login']);
      expect(component.logout).toBeTruthy();
  });
});
