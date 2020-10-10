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
    {task: 'Wash dishes', completed: false, edit: false},
    {task: 'Wash car', completed: true, edit: false},
    {task: 'Clean toilet', completed: false, edit: false},
    {task: 'Take out garbage', completed: false, edit:false}
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

  completeTask = function(i) {
    this.toDos[i].completed = true;
  }

  incompleteTask = function(i) {
    this.toDos[i].completed = false;
  }

  setEdit = function(i) {
    this.editOn = true;
    this.index = i;
  }

  editTask = function(i) {
    if (!!this.editEntry) {
      this.toDos[i].task = this.editEntry;
    this.toDos[i].edit = true;
    this.editOn = false;
    this.index = null;
    this.editEntry = '';
    this.search(this.searchEntry);
    }
  }

  addTask = function() {
    let newtask = {task: this.userEntry, completed: false}
    if (!!this.userEntry) {
      this.toDos.push(newtask)
    }
    this.userEntry = '';
    this.search(this.searchEntry);
  }

  deleteTask = function(i) {
    this.toDos.splice(i, 1)
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
  completed: boolean,
  edit: boolean
};