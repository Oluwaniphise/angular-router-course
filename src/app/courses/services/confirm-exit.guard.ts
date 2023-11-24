import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot } from "@angular/router"
import { CourseComponent } from "../course/course.component"
import { Observable } from "rxjs";
// export const ConfirmExitGuard: CanDeactivateFn<CourseComponent> = () => {

// }

export function confirmExitGuard(): CanDeactivateFn<CourseComponent> {
    console.log("confirmExitGuard");
    return (component: CourseComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean => {
        return component.confirmExit()
    }
}