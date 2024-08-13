import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';

  filter: "all" | "active" | "done" = "all";

  allTodos = [
    { text: "wake up", done: true },
    { text: "play", done: false },
    { text: "run", done: false },
    { text: "walk", done: false },
  ];

  get todos() {
    if (this.filter === "all") {
      return this.allTodos;
    }
    return this.allTodos.filter((todo) =>
      this.filter === "done" ? todo.done : !todo.done
    );
  }

  addTodo(text: string) {
    if (!text) return;
    if (this.allTodos.filter(todo => todo.text == text).length) return;

    this.allTodos.unshift({
      text,
      done: false
    });
  }

  removeTodo(text: string) {
    if (!text) return;

    this.allTodos = this.allTodos.filter(todo => todo.text != text)
  }
}
