import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask:EventEmitter<Task>=new EventEmitter()
  text:string;
  day:string;
  reminder:boolean=false;
  showAddTask:boolean;
  subscription:Subscription;
  constructor(private uiService:UiService) {

    // now what it does is when add button is clicked in header component automatically subscription catches it and changes it here 
    // so basically whenever we want to do fnc like this we can use this 
    this.subscription=this.uiService.onToggle().subscribe(
      value=>this.showAddTask=value
    )
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text){
      alert('Please add a task')
      return
    }
    const newTask={
      text:this.text,
      day:this.day,
      reminder:this.reminder
    }

    this.onAddTask.emit(newTask)

    this.text=''
    this.day=''
    this.reminder=false
  }
}
