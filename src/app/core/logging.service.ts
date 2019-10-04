import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LoggingService {
  public log(message: string, obj?: any): void {
    console.log(message, obj);
  }
}
