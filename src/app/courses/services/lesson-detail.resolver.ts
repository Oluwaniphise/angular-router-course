import { ResolveFn, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { CoursesService } from "./courses.service";
import { inject } from "@angular/core";
import { LessonDetail } from "../model/lesson-detail";



export const LessonDetailResolver: ResolveFn<LessonDetail> = 
(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LessonDetail> => {
    const courseUrl = route.parent.paramMap.get("courseUrl"), 
    lessonSeqNo = route.paramMap.get("lessonSeqNo");
    return inject(CoursesService).loadLessonDetail(courseUrl, lessonSeqNo);
}