import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';
// import {TASKS} from './../../mock-tasks'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  // One way
  // tasks:Task[]=TASKS

  // Second Way using service 
  tasks:Task[]=[]

  // to use service we need to add it in constructor argument 
  constructor(private taskService:TaskService) { }

  // void means this particular fnc doesnt return anything 
  ngOnInit(): void {
    // this.tasks=this.taskService.getTasks()
    
    // another way using observable 
    this.taskService.getTasks().subscribe((tasks)=>(
      this.tasks=tasks
    ))
    
  }
  
  deleteTask(task:Task){

    // think of subscibe as .then in axios which get fired in success 
    this.taskService.deleteTask(task).subscribe(()=>(

      this.tasks=this.tasks.filter(t=>t.id !== task.id)
    ))

  }

  toggleReminder(task:Task){
    task.reminder=!task.reminder;
    this.taskService.updateTaskReminder(task).subscribe()
    console.log(task.reminder);
    
  }
  addTask(task:Task){
    this.taskService.addTask(task).subscribe((task)=>(
      this.tasks.push(task)
    ))
   
    console.log(task);
    
  }

}
