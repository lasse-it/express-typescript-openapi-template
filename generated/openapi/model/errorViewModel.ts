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


export class ErrorViewModel {
	/**
    * Message
    */
	"message"?: string;
	/**
    * Display message
    */
	"reasonDisplayMessage"?: string;
	/**
    * A reason code
    */
	"reasonCode"?: string;

	static discriminator: string | undefined = undefined;

	static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
		{
			"name": "message",
			"baseName": "message",
			"type": "string"
		},
		{
			"name": "reasonDisplayMessage",
			"baseName": "reasonDisplayMessage",
			"type": "string"
		},
		{
			"name": "reasonCode",
			"baseName": "reasonCode",
			"type": "string"
		}    ];

	static getAttributeTypeMap() {
		return ErrorViewModel.attributeTypeMap;
	}
}

