import { Routes } from '@angular/router';
// import { TasksListComponent } from './tasks-list/tasks-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ShowTaskComponent } from './show-task/show-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    // {path:"", component: TasksListComponent},
    {path:"add", component: AddTaskComponent},
    {path:'register',component:RegisterComponent},
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    {path:'login',component:LoginComponent},
    {path:"show/:id", component: ShowTaskComponent},
    {path:"edit/:id", component: EditTaskComponent},
];
