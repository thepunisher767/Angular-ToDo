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
  allCompleted: boolean;
  verifyArray: boolean[];

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

  deleteTask = function(i) {
    this.toDos.splice(i, 1)
  }

  congrats = function() {
    /*for(let item of this.toDos) {
      if (item.completed == true) {
        this.verifyArray.push(true)
      }
      else{
        this.verifyArray.push(false)
      } 
    }
    for(let verify of this.verifyArray) {
      if(verify = true) {
        this.allCompleted = true;
      }
      else {
        this.allCompleted = false;
      }
    }*/
  }
}

interface ToDo {
  task: string,
  completed: boolean
};