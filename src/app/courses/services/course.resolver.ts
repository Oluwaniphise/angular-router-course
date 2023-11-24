import { ResolveFn, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Course } from "../model/course";
import { CoursesService } from "./courses.service";
import { inject } from "@angular/core";
import { first } from "rxjs/operators";



export const courseResolver: ResolveFn<Course> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> => {
    const courseUrl = route.paramMap.get("courseUrl");
    return inject(CoursesService).loadCourseByUrl(courseUrl).pipe(first());
}