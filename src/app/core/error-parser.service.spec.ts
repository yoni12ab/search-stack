import { TestBed } from "@angular/core/testing";

import { ErrorParserService } from "./error-parser.service";
import { HttpErrorResponse } from "@angular/common/http";

describe("ErrorParserService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [ErrorParserService]
    })
  );

  it("should be created", () => {
    const service: ErrorParserService = TestBed.get(ErrorParserService);
    expect(service).toBeTruthy();
  });

  it("should return client error message", () => {
    const service: ErrorParserService = TestBed.get(ErrorParserService);
    const SOME_MESSAGE = "some message";
    const error = new Error(SOME_MESSAGE);
    expect(service.getClientMessage(error)).toEqual(SOME_MESSAGE);
  });

  it("should return client error stack", () => {
    const service: ErrorParserService = TestBed.get(ErrorParserService);
    const SOME_MESSAGE = "some message";
    const error = new Error(SOME_MESSAGE);
    error.stack = SOME_MESSAGE;
    expect(service.getClientStack(error)).toEqual(SOME_MESSAGE);
  });

  it("should return http error message", () => {
    const service: ErrorParserService = TestBed.get(ErrorParserService);
    const SOME_MESSAGE = "some message";
    const URL = "http://example.com";
    const ERROR_STATUS = 503;
    const error = new HttpErrorResponse({
      statusText: SOME_MESSAGE,
      error: SOME_MESSAGE,
      status: ERROR_STATUS,
      url: URL
    });
    const res = `Http failure response for ${URL}: ${ERROR_STATUS} ${SOME_MESSAGE}`;
    expect(service.getHttpMessage(error)).toEqual(res);
  });

  it("should return http error stack", () => {
    const service: ErrorParserService = TestBed.get(ErrorParserService);
    const SOME_MESSAGE = "some message";
    const URL = "http://example.com";
    const ERROR_STATUS = 503;
    const error = new HttpErrorResponse({
      statusText: SOME_MESSAGE,
      error: SOME_MESSAGE,
      status: ERROR_STATUS,
      url: URL
    });
    const res = `TBD handle response extra details`;
    expect(service.getHttpStack(error)).toEqual(res);
  });
});
