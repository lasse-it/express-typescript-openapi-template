import {Request, Response} from "express";

export const getItem = (req: Request, res: Response) => {
	res.send("item");
};

export const getItems = (req: Request, res: Response) => {
	res.send("items");
};

export const createItem = (req: Request, res: Response) => {
	res.send("created");
};

export const updateItem = (req: Request, res: Response) => {
	res.send("updated");
};

export const deleteItem = (req: Request, res: Response) => {
	res.send("deleted");
};