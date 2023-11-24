import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { courseResolver } from './services/course.resolver';
import { LessonDetailComponent } from './lesson/lesson-detail.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { LessonsResolver } from './services/lessons.resolver';
import { LessonDetailResolver } from './services/lesson-detail.resolver';
import { AuthGuard, AuthGuardChild } from '../services/auth.guard';
import { confirmExitGuard } from './services/confirm-exit.guard';


const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
   path:":courseUrl",
   component: CourseComponent,
   canActivate: [AuthGuard],
   canActivateChild:[AuthGuardChild],
   canDeactivate: [confirmExitGuard],  
   children: [
    {
      path: "",
      component: LessonsListComponent,
      resolve:{
        lessons: LessonsResolver
      }
    },
    {
      path: "lessons/:lessonSeqNo",
      component: LessonDetailComponent,
      resolve:{
        lesson: LessonDetailResolver
      }
    },


   ],
   resolve:{
    course: courseResolver
   }
  }
];

@NgModule({
  imports: [
RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [
    { provide: 'courseResolver', useFactory: courseResolver },
    { provide: 'lessonsResolver', useFactory: LessonsResolver },
    { provide: 'LessonDetailResolver', useFactory: LessonDetailResolver },
    { provide: 'AuthGuard', useFactory: AuthGuard },
    { provide: 'AuthGuardChild', useFactory: AuthGuardChild },
    { provide: 'confirmExitGuard', useFactory: confirmExitGuard },
  ]
})
export class CoursesRoutingModule {



}
