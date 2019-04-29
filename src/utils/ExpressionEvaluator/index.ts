import { IToken, TokenType, IExpressionParser } from "./IExpressionParser";

class Token implements IToken {
	type: TokenType;
	value: string;
	constructor(type: TokenType, value: string) {
		this.type = type;
		this.value = value;
	}
}

export default class ExpressionParser implements IExpressionParser {
	private prec: { [index: string]: number } = {
		'+': 2,
		'-': 2,
		'*': 3,
		'/': 3
	};

	private precedence(t: string) : number {
		return this.prec[t];
	}

	private peek(arr: Array<any>) : any {
		return arr[arr.length - 1];
	}

	private isDigit(ch: string) : boolean{
		return /\d/.test(ch);
	}

	private isOperator(ch: string) : boolean {
		return /\+|-|\*|\/|\^/.test(ch);
	}

	private isLeftParenth(ch: string) : boolean {
		return ch === "(";
	}

	private isRightParenth(ch: string) : boolean {
		return ch === ")";
	}

	private isDecimalPoint(ch: string) : boolean {
		return ch === ".";
	}

	public tokenise(expr: string) : Array<string>{
		if (!expr) return []
		
		const tokens : Array<IToken> = [];
		let buffer : Array<string> = [];

		const emptyBuffer = () => {
			if (buffer.length) {
				tokens.push(new Token(TokenType.Literal, buffer.join("")))
				buffer = [];
			}
		}
		

		expr.split("").forEach((ch, i) => {
			if (this.isDigit(ch)){
				buffer.push(ch);
			}
			else if (this.isDecimalPoint(ch)) {
				buffer.push(ch);
			}
			else if (this.isOperator(ch)) {
				if (buffer.length || (tokens.length && this.peek(tokens).type === TokenType.RightParenth)) {
					emptyBuffer();
					tokens.push(new Token(TokenType.Operator, ch))
				}
				else {
					buffer.push(ch);
				}

			}
			else if (this.isLeftParenth(ch)) {
				emptyBuffer();
				tokens.push(new Token(TokenType.LeftParenth, ch))
			}
				
			else if (this.isRightParenth(ch)) {
				emptyBuffer();
				tokens.push(new Token(TokenType.RightParenth, ch))
			}
		})

		emptyBuffer();

		return tokens.map(token => token.value)
	}

	public parse(expr: string) : Array<string> {

		const tokens = this.tokenise(expr);

		let operators: Array<string> = [];
		let literals: Array<string> = [];

		// Shunting-yard algorithm
		// https://en.wikipedia.org/wiki/Shunting-yard_algorithm
		tokens!.forEach((t: string) => {
			switch (t) {
				case '-':
				case '/':
				case '*':
				case '+':
					while (['+', '-', '*', '/'].includes(this.peek(operators))) {
						if (this.precedence(this.peek(operators)) < this.precedence(t)) {
							break;
						} else {
							literals.push(operators.pop()!)
						}
					}
					operators.push(t)
					break;
				case '(':
					operators.push(t);
					break;
				case ')':
					while (this.peek(operators) !== '(')
						literals.push(operators.pop()!);
					operators.pop();
					break;
				default:
					literals.push(t);
					break;
			}
		});

		return literals.concat(operators.reverse());
	}

	public evaluate(expr: string) : number {
		const postfix = this.parse(expr);

		if (!postfix || !postfix.length) return NaN;
		
		const stack: Array<number> = [];

		try {
			postfix.forEach((token) => {
				const e = Number(token);
				if (e === e)
					return stack.push(e);
	
				const op1 = stack.pop();
				const op2 = stack.pop();
	
				if (op1 === undefined || op2 === undefined)
					throw new Error("Expression Invalid");
	
				switch (token) {
					case '+':
						stack.push(op2 + op1);
						break;
					case '-':
						stack.push(op2 - op1);
						break;
					case '/':
						stack.push(op2 / op1);
						break;
					case '*':
						stack.push(op2 * op1);
						break;
					default:
						throw new Error("Expression Invalid");
				}
			});
		} catch (Error) {
			return NaN
		}

		return stack.pop()!;
	};
}