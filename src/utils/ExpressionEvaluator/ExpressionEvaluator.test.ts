import ExpressionEvaluator from '.'

describe("Expression Evaluator -- tokenise", () => {
	const evaluator = new ExpressionEvaluator();
	let result;
	it("Should equal [1]", () => {
		result = evaluator.tokenise("1");
		expect(result).toEqual(["1"]);
	})

	it("Should equal [-1]", () => {
		result = evaluator.tokenise("-1");
		expect(result).toEqual(["-1"]);
	})

	it("Should equal [1.3]", () => {
		result = evaluator.tokenise("1.3");
		expect(result).toEqual(["1.3"]);
	})

	it("Should equal [1, +, 2]", () => {
		result = evaluator.tokenise("1+2");
		expect(result).toEqual(["1", "+", "2"]);
	})

	it("Should equal [1, -, 2]", () => {
		result = evaluator.tokenise("1-2");
		expect(result).toEqual(["1", "-", "2"]);
	})

	it("Should equal [1, /, 2]", () => {
		result = evaluator.tokenise("1/2");
		expect(result).toEqual(["1", "/", "2"]);
	})

	it("Should equal [1, *, 2]", () => {
		result = evaluator.tokenise("1*2");
		expect(result).toEqual(["1", "*", "2"]);
	})

	it("Should equal [1, +, -2]", () => {
		result = evaluator.tokenise("1+-2");
		expect(result).toEqual(["1", "+", "-2"]);
	})

	it("Should equal [123456, /, 54321]", () => {
		result = evaluator.tokenise("123456 / 54321");
		expect(result).toEqual(["123456", "/", "54321"]);
	})

	it("Should equal [1, +, (, 2, /, 3, )]", () => {
		result = evaluator.tokenise("1+(2/3)");
		expect(result).toEqual(["1", "+", "(", "2", "/", "3", ")"]);
	})

	it("Should equal [1, +, (, -2, /, 3, )]", () => {
		result = evaluator.tokenise("1+(-2/3)");
		expect(result).toEqual(["1", "+", "(", "-2", "/", "3", ")"]);
	})

	it("Should equal [1, +, (, -2, /, 3, ), *, 100, -, -2]", () => {
		result = evaluator.tokenise("1+(-2/3) * 100 - -2");
		expect(result).toEqual(["1", "+", "(", "-2", "/", "3", ")", "*", "100", "-", "-2"]);
	})

	it("Should return empty list", () => {
		result = evaluator.tokenise("a");
		expect(result).toEqual([]);
	})

	it("Should return list of operators", () => {
		result = evaluator.tokenise("+-*");
		expect(result).toEqual(["+", "-", "*"]);
	})
})

describe("Expression Evaluator -- parse", () => {
	const evaluator = new ExpressionEvaluator();
	let result;
	it("Should equal [1]", () => {
		result = evaluator.parse("1");
		expect(result).toEqual(["1"]);
	})

	it("Should equal [-1]", () => {
		result = evaluator.parse("-1");
		expect(result).toEqual(["-1"]);
	})

	it("Should equal [1.3]", () => {
		result = evaluator.parse("1.3");
		expect(result).toEqual(["1.3"]);
	})

	it("Should equal [1, 2, +]", () => {
		result = evaluator.parse("1+2");
		expect(result).toEqual(["1", "2", "+"]);
	})

	it("Should equal [1, 2, -]", () => {
		result = evaluator.parse("1-2");
		expect(result).toEqual(["1", "2", "-"]);
	})

	it("Should equal [1, 2, /]", () => {
		result = evaluator.parse("1/2");
		expect(result).toEqual(["1", "2", "/"]);
	})

	it("Should equal [1, 2, *]", () => {
		result = evaluator.parse("1*2");
		expect(result).toEqual(["1", "2", "*"]);
	})

	it("Should equal [1, -2, +]", () => {
		result = evaluator.parse("1+-2");
		expect(result).toEqual(["1", "-2", "+"]);
	})

	it("Should equal [123456, 54321, /]", () => {
		result = evaluator.parse("123456 / 54321");
		expect(result).toEqual(["123456", "54321", "/"]);
	})

	it("Should equal [1, 2, 3, /, +]", () => {
		result = evaluator.parse("1+(2/3)");
		expect(result).toEqual(["1", "2", "3", "/", "+"]);
	})

	it("Should equal [1, -2, 3, /, +]", () => {
		result = evaluator.parse("1+(-2/3)");
		expect(result).toEqual(["1", "-2", "3", "/", "+"]);
	})

	it("Should equal [1, -2, 3.0, /, 100, *, -2, -]", () => {
		result = evaluator.parse("1+(-2/3.0) * 100 - -2");
		expect(result).toEqual(["1", "-2", "3.0", "/", "100", "*", "+", "-2", "-"]);
	})

	it("Should return empty list", () => {
		result = evaluator.parse("a");
		expect(result).toEqual([]);
	})

	it("Should return list of operators", () => {
		result = evaluator.parse("+-*");
		expect(result).toEqual(["+", "*", "-"]);
	})
})

describe("Expression Evaluator -- evaluate", () => {
	const evaluator = new ExpressionEvaluator();
	let result;
	it("Should equal 1", () => {
		result = evaluator.evaluate("1");
		expect(result).toEqual(1);
	})
	it("Should equal -1", () => {
		result = evaluator.evaluate("-1")
		expect(result).toEqual(-1);

	})
	it("Should equal 1.3", () => {
		result = evaluator.evaluate("1.3");
		expect(result).toEqual(1.3);
	})
	it("Should equal 3", () => {
		result = evaluator.evaluate("1+2");
		expect(result).toEqual(3);
	})
	it("Should equal -1", () => {
		result = evaluator.evaluate("1-2");
		expect(result).toEqual(-1);
	})

	it("Should equal 0.5", () => {
		result = evaluator.evaluate("1/2");
		expect(result).toEqual(0.5);
	})

	it("Should equal 20", () => {
		result = evaluator.evaluate("2*10");
		expect(result).toEqual(20);
	})

	it("Should equal -1", () => {
		result = evaluator.evaluate("1+-2");
		expect(result).toEqual(-1);
	})

	it("Should equal 2.272712210747225", () => {
		result = evaluator.evaluate("123456 / 54321");
		expect(result).toEqual(2.272712210747225);
	})

	it("Should equal 1.6666666666666665", () => {
		result = evaluator.evaluate("1+(2/3)");
		expect(result).toEqual(1.6666666666666665);
	})

	it("Should equal 0.33333333333333337", () => {
		result = evaluator.evaluate("1+(-2/3)");
		expect(result).toEqual(0.33333333333333337);
	})

	it("Should equal -63.6666666667", () => {
		result = evaluator.evaluate("1+(-2/3) * 100 - -2");
		expect(result).toEqual(-63.66666666666666);
	})

	it("Should return NaN", () => {
		result = evaluator.evaluate("a");
		expect(result).toEqual(NaN);
	})

	it("Should return NaN", () => {
		result = evaluator.evaluate("+-*");
		expect(result).toEqual(NaN);
	})

	it("Should return NaN", () => {
		result = evaluator.evaluate(NaN as any);
		expect(result).toEqual(NaN);
	})
})