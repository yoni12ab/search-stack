import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ErrorParserService {
  public getClientMessage(error: Error): string {
    if (!navigator.onLine) return "no internet connection";

    return (error && error.message) || error.toString();
  }

  public getClientStack(error: Error): string {
    return error.stack;
  }

  public getHttpMessage(error: HttpErrorResponse): string {
    return (error && error.message) || error.toString();
  }

  public getHttpStack(error: HttpErrorResponse): string {
    return "TBD handle response extra details";
  }
}
