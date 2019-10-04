import { Injectable, ErrorHandler, Inject, Injector } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { LoggingService } from "./logging.service";
import { NotificationService } from "./notification.service";
import { ErrorParserService } from "./error-parser.service";
import { UtilsService } from "./utils.service";

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
  private get logger(): LoggingService {
    return this.injector.get(LoggingService);
  }

  private get notification(): NotificationService {
    return this.injector.get(NotificationService);
  }

  private get errorParser(): ErrorParserService {
    return this.injector.get(ErrorParserService);
  }

  private get utilsService(): UtilsService {
    return this.injector.get(UtilsService);
  }

  constructor(private injector: Injector) {}

  handleError(error: Error | HttpErrorResponse): void {
    const errorParser = this.errorParser;
    let message = "";
    let stack = "";

    if (error instanceof HttpErrorResponse) {
      message = errorParser.getHttpMessage(error);
      stack = errorParser.getHttpStack(error);
    } else {
      message = errorParser.getClientMessage(error);
      stack = errorParser.getClientStack(error);
    }

    if (message) {
      this.notification.error(message);
      this.logger.log(message, stack);
    }

    this.utilsService.setLoader(false);
  }
}
