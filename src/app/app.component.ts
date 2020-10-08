import { Component, ɵisBoundToModule__POST_R3__ } from '@angular/core';
import { toUnicode } from 'punycode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO List';
  userEntry: string = "";

  toDos: ToDo[] = [
    {task: 'Wash dishes', completed: false},
    {task: 'Wash car', completed: true},
    {task: 'Clean toilet', completed: false},
    {task: 'Take out garbage', completed: false}
  ];

  completeTask = function(i) {
    this.toDos[i].completed = true;
  }

  addTask = function() {
    let newtask = {task: this.userEntry, completed: false}
    if (!!this.userEntry) {
      this.toDos.push(newtask)
    }
    this.userEntry = '';
  }
}

interface ToDo {
  task: string,
  completed: boolean
};