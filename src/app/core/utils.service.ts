import { Injectable } from "@angular/core";
import { Observable, fromEvent, of } from "rxjs";
import { startWith, throttleTime, map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UtilsService {
  private isScreenSmall$;

  constructor() {
    this.init();
  }

  public getIsSmallScreen(): Observable<boolean> {
    return this.isScreenSmall$;
  }

  public checkMaxScreenWidth(maxWidth: number): boolean {
    return document.body.offsetWidth < maxWidth;
  }

  private init() {
    this.createSmallScreenObservable();
  }

  private createSmallScreenObservable() {
    const maxScreenSize = 1024;
    // Create observable from window resize event throttled so only fires every 500ms
    const screenSizeChanged$ = fromEvent(window, "resize").pipe(
      throttleTime(500),
      map(() => this.checkMaxScreenWidth(maxScreenSize))
    );

    // Start off with the initial value use the isScreenSmall$ | async in the
    // view to get both the original value and the new value after resize.
    this.isScreenSmall$ = screenSizeChanged$.pipe(
      startWith(this.checkMaxScreenWidth(maxScreenSize))
    );
  }
}
