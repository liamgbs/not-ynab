export default class ExpressionParser {
	private prec: { [index: string]: number } = {
		'+': 2,
		'-': 2,
		'*': 3,
		'/': 3
	};
	private precedence(t: string) {
		return this.prec[t];
	}

	private peek(arr: string[]) {
		return arr[arr.length - 1];
	}

	parse(expr: string) {
		const regex = /(\d+\.\d+|\d+|-|\+|\/|\*|\(|\))/g;
		const tokens = expr.match(regex);

		let operators: Array<string> = [];
		let literals: Array<string | undefined> = [];

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
							literals.push(operators.pop())
						}
					}
					operators.push(t)
					break;
				case '(':
					operators.push(t);
					break;
				case ')':
					while (this.peek(operators) !== '(')
						literals.push(operators.pop());
					operators.pop();
					break;
				default:
					literals.push(t);
					break;
			}
		});

		return literals.concat(operators.reverse());
	}

	evaluate(expr: string) {
		const postfix = this.parse(expr);
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

		return stack.pop();
	};
}