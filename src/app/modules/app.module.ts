import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { CourseComponent } from './course/course.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { UserComponent } from './user/user.component';
import { MenuComponent } from './menu/menu.component';
import { TemplateComponent } from './shared/template/template.component';
import { UserListComponent } from './user/list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AdminListComponent } from './admin/list/admin-list.component';
import { CourseListComponent } from './course/list/course-list.component';
import { ContactListComponent } from './contact/list/contact-list.component';
import { FeedbackListComponent } from './feedback/list/feedback-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminListComponent,
    ContactComponent,
    ContactListComponent,
    CourseComponent,
    CourseListComponent,
    FeedbackComponent,
    FeedbackListComponent,
    UserListComponent,
    UserComponent,
    MenuComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
