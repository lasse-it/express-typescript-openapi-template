import express from "express";
import morgan from "morgan";
import path from "path";
import * as OpenApiValidator from "express-openapi-validator";
import {handleError} from "./errors";
import {setupI18n} from "./localization";


export const app = express();
const apiSpec = path.join(__dirname, "../api/openapi.yaml");

app.use(morgan("combined"));
app.use(express.json({}));
app.use(express.urlencoded({extended: false}));
app.use("/spec", express.static(apiSpec));

setupI18n(app);

app.use(
	OpenApiValidator.middleware({
		apiSpec,
		validateRequests: true,
		validateResponses: true,
		validateApiSpec: true,
		// 3. Provide the base path to the operation handlers directory
		operationHandlers: path.join(__dirname), // default false
	}),
);

app.use(handleError);

export const server = app.listen(8080, () => {
	console.log("Listening on http://localhost:8080");
});