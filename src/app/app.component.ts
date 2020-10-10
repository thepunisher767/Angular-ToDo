import { SelectorMatcher } from '@angular/compiler';
import { Component, ɵisBoundToModule__POST_R3__ } from '@angular/core';
import { toUnicode } from 'punycode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do List';
  userEntry: string = "";
  editEntry: string = "";
  searchEntry: string = "";
  editOn: boolean = false;
  searchOn: boolean = false;
  index: number;
  searchList: ToDo[] = [];

  toDos: ToDo[] = [
    {task: 'Wash dishes', completed: false},
    {task: 'Wash car', completed: true},
    {task: 'Clean toilet', completed: false},
    {task: 'Take out garbage', completed: false}
  ];

  search = function(search) {
    this.searchList = [];
    this.searchOn = true;
    let searchReg = new RegExp(search, "i");
    for (let s of this.toDos) {
      if (searchReg.test(s.task)) {
      this.searchList.push(s)
      }
    }
  }

  clearSearch = function() {
    this.searchOn = false;
    this.searchList = [];
    this.searchEntry = '';
  }

  setEdit = function(i) {
    this.editOn = true;
    this.index = i;
  }


  completeTask = function(i) {
    this.toDos[i].completed = true;
  }

  incompleteTask = function(i) {
    this.toDos[i].completed = false;
  }

  editTask = function(i) {
    if (!!this.editEntry) {
      this.toDos[i].task = this.editEntry;
      this.editOn = false;
      this.editEntry = '';
      if(this.searchOn) {
        this.search(this.searchEntry);
      }
    }
  }
  editOff = function() {
    this.editOn = false;
    if(this.searchOn) {
      this.search(this.searchEntry);
    }
  }

  addTask = function() {
    let newtask = {task: this.userEntry, completed: false}
    if (!!this.userEntry) {
      this.toDos.push(newtask)
    }
    this.userEntry = '';
    if(this.searchOn) {
      this.search(this.searchEntry);
    }
  }

  deleteTask = function(i) {
    this.toDos.splice(i, 1)
    this.search(this.searchEntry);
  }


  searchCompleteTask = function(i) {
    let taskIndex: number = 0;
    for (let todo of this.toDos) {
      if (todo.task == this.searchList[i].task) {
        this.toDos[taskIndex].completed = true;
        return;
      }
      taskIndex++;
    }
  }

  searchIncompleteTask = function(i) {
    let taskIndex: number = 0;
    for (let todo of this.toDos) {   
      if (todo.task == this.searchList[i].task) {
        this.toDos[taskIndex].completed = false;
        return;
      }
      taskIndex++;  
    }
  }

  searchSetEdit = function(i) {
    let taskIndex: number = 0;
    for (let todo of this.toDos) {
      if (todo.task == this.searchList[i].task) {
        this.index = taskIndex;
        this.editOn = true;
        return;
      }
      taskIndex++;
    }
  }

  searchDeleteTask = function(i) {
    let taskIndex: number = 0;
    for (let todo of this.toDos) {
      if (todo.task == this.searchList[i].task) {
        this.toDos.splice(taskIndex, 1)
        this.search(this.searchEntry);
        return;
      }
      taskIndex++;
    }
  }


  congrats = function() {
    if (this.toDos.some(t => t.completed === false)) {
      return false;
    }
    return true;
  }
}

interface ToDo {
  task: string,
  completed: boolean
};