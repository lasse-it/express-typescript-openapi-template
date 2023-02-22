import request from "supertest";
import {app, server} from "./index";

describe("GET /ping", () => {
	it("should return 200 OK", async () => {
		const response = await request(app).get("/ping");
		expect(response.text).toBe("pong");
		expect(response.statusCode).toBe(200);
	});
});

afterAll(() => {
	server.close();
});