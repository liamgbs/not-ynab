export interface IExpressionParser {
	tokenise: (expr: string) => Array<string>,
	parse: (expr: string) => Array<string>,
	evaluate: (expr: string) => number
}

export interface IToken {
	type: TokenType,
	value: string
}

export enum TokenType {
	Literal = "Literal",
	Operator = "Operator",
	LeftParenth = "LeftParenth",
	RightParenth = "RightParenth",
	DecimalPoint = "DecimalPoint"
}