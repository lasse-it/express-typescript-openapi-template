import i18n from "i18next";
import fsBackend from "i18next-fs-backend";
import middleware from "i18next-http-middleware";
import express from "express";

export const setupI18n = (app: express.Application) => {
	i18n.use(fsBackend).use(middleware.LanguageDetector).init({
		fallbackLng: "da",
		supportedLngs: ["da"],
		detection: {
			order: ["header"],
		},
		backend: {
			loadPath: "locales/{{lng}}/{{ns}}.json",
		},
	}).catch((error: Error) => {
		console.error("i18n failed to initialize:", error);
		process.exit(1);
	});

	app.use(middleware.handle(i18n));
};