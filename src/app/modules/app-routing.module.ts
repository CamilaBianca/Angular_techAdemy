import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminListComponent } from './admin/list/admin-list.component';
import { ContactComponent } from './contact/contact.component';
import { ContactListComponent } from './contact//list/contact-list.component';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course/list/course-list.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { UserListComponent } from './user/list/user-list.component';
import { UserComponent } from './user/user.component';
import { FeedbackListComponent } from './feedback/list/feedback-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: 'admin', component: AdminListComponent },
  { path: 'admin/add', component: AdminComponent },
  { path: 'admin/update/:id', component: AdminComponent },
  { path: 'admin/view/:id', component: AdminComponent },
  { path: 'user', component: UserListComponent },
  { path: 'user/add', component: UserComponent },
  { path: 'user/update/:id', component: UserComponent },
  { path: 'user/view/:id', component: UserComponent },
  { path: 'contact', component: ContactListComponent },
  { path: 'contact/add', component: ContactComponent },
  { path: 'contact/update/:id', component: ContactComponent },
  { path: 'contact/view/:id', component: ContactComponent },
  { path: 'course', component: CourseListComponent },
  { path: 'course/add', component: CourseComponent },
  { path: 'course/update/:id', component: CourseComponent },
  { path: 'course/view/:id', component: CourseComponent },
  { path: 'feedback', component: FeedbackListComponent },
  { path: 'feedback/add', component: FeedbackComponent },
  { path: 'feedback/update/:id', component: FeedbackComponent },
  { path: 'feedback/view/:id', component: FeedbackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
