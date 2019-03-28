import ExpressionEvaluator from '.'

describe("Expression Evaluator", () => {
	const evaluator = new ExpressionEvaluator();
	let result;
	it("Should equal 1", () => {
		result = evaluator.parse("1")

	})
})