import { ResolveFn, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { CoursesService } from "./courses.service";
import { inject } from "@angular/core";
import { first } from "rxjs/operators";
import { LessonSummary } from "../model/lesson-summary";



export const LessonsResolver: ResolveFn<LessonSummary[]> = 
(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LessonSummary[]> => {
    const courseUrl = route.paramMap.get("courseUrl");
    return inject(CoursesService).loadAllCourseLessonsSummary(courseUrl);
}