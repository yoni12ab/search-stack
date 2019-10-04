import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root"
})
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}

  public success(message: string): string {
    this.snackBar.open(message, null, {
      duration: 2000,
      panelClass: ["snack-success"]
    });
    return message;
  }

  public error(message: string): string {
    this.snackBar.open(message, null, {
      duration: 2000,
      panelClass: ["snack-error"]
    });
    return message;
  }
}
