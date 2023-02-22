import {NextFunction, Response} from "express";
import {ErrorViewModel} from "../generated/openapi/model/errorViewModel";
import {HttpError} from "express-openapi-validator/dist/framework/types";
import {SmukRequest} from "./types/Request";

export const handleError = (err: Error, req: SmukRequest, res: Response, next: NextFunction) => {
	if (err instanceof HttpError) {
		return handleHttpError(err, req, res, next);
	}

	// default error handler
	console.error(err);
	const a = new ErrorViewModel();
	a.message = err.message;
	a.reasonCode = err.name;
	a.reasonDisplayMessage = req.t("error.default_reason_display_message").toString();
	res.status(500).json(a);
};

const handleHttpError = (err: HttpError, req: SmukRequest, res: Response, _next: NextFunction) => {
	const a = new ErrorViewModel();
	a.message = err.message;
	// @ts-ignore: https://github.com/cdimascio/express-openapi-validator/pull/819
	a.reasonCode = err.errors[0].errorCode;
	a.reasonDisplayMessage = req.t("error.default_reason_display_message").toString();
	res.status(err.status || 500).json(a);
};