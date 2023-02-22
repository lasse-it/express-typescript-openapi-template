/**
 * Code Template
 * Example of a RESTful API
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class Item {
	/**
    * Item ID
    */
	"id"?: string;
	/**
    * Item name
    */
	"name"?: string;
	/**
    * Item description
    */
	"description"?: string;
	/**
    * Item price
    */
	"price"?: number;

	static discriminator: string | undefined = undefined;

	static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
		{
			"name": "id",
			"baseName": "id",
			"type": "string"
		},
		{
			"name": "name",
			"baseName": "name",
			"type": "string"
		},
		{
			"name": "description",
			"baseName": "description",
			"type": "string"
		},
		{
			"name": "price",
			"baseName": "price",
			"type": "number"
		}    ];

	static getAttributeTypeMap() {
		return Item.attributeTypeMap;
	}
}

