import budgetReducer, { defaultState as budgetDefault, BudgetState } from '../budget';
import { newMonthHelper } from '../helpers';

import * as BudgetActions from '../../actions/budget'


const emptyState: BudgetState = {
	months: [],
	activeMonth: -1
}

const hasMonthsState: BudgetState = {
	months: [
		{
			monthName: "Mar2019",
			toBeBudgeted: 0.0,
			categoryGroups: [],
			categories: [],
			ageOfMoney: 0,
			note: "test month"
		},
		{
			monthName: "Apr2019",
			toBeBudgeted: 0.0,
			categoryGroups: [],
			categories: [],
			ageOfMoney: 0,
			note: "test month"
		},
	],
	activeMonth: 1
}

const hasCategoriesState: BudgetState = {
	months: [
		{
			monthName: "Mar2019",
			toBeBudgeted: 0.0,
			categoryGroups: [],
			categories: [
				{
					categoryName: "test category",
					categoryGroup: "test group",
					budgeted: 0,
					balance: 0,
					hidden: false,
				}
			],
			ageOfMoney: 0,
			note: "test month"
		},
		{
			monthName: "Apr2019",
			toBeBudgeted: 0.0,
			categoryGroups: [],
			categories: [
				{
					categoryName: "test category",
					categoryGroup: "test group",
					budgeted: 0,
					balance: 0,
					hidden: false,
				}
			],
			ageOfMoney: 0,
			note: "test month"
		},
	],
	activeMonth: 1
}

describe("budget reducer", () => {
	it("should return default state", () => {
		expect(budgetReducer(undefined, {type: undefined}))
			.toEqual(budgetDefault)
	})

	it("should create new months", () => {
		let workingState: BudgetState = budgetReducer(emptyState, BudgetActions.appendMonthAction());

		expect(workingState.months.length).toEqual(1);
		expect(workingState.months[0]).toEqual(newMonthHelper(undefined));

		workingState = budgetReducer(workingState, BudgetActions.appendMonthAction());

		expect(workingState.months.length).toEqual(2);
		expect(workingState.months[1]).toEqual(newMonthHelper(workingState.months[0]));
	});

	it("should create new category groups", () => {
		let workingState: BudgetState = budgetReducer(hasMonthsState, BudgetActions.addCategoryGroupAction("Testing Group"));

		workingState.months.forEach(month => {
			expect(month.categoryGroups[0].groupName).toEqual("Testing Group");
		});

		workingState = budgetReducer(workingState, BudgetActions.addCategoryGroupAction("Testing Group 2"));

		workingState.months.forEach(month => {
			expect(month.categoryGroups[1].groupName).toEqual("Testing Group 2");
		});
	})

	it("should create new categories", () => {
		let workingState: BudgetState = budgetReducer(hasMonthsState, BudgetActions.addCategoryAction("Test Group", "Test Category",))

		workingState.months.forEach(month => {
			expect(month.categories[0].categoryName).toEqual("Test Category")
			expect(month.categories[0].categoryGroup).toEqual("Test Group")
		});

		workingState = budgetReducer(workingState, BudgetActions.addCategoryAction("Test Group 2", "Test Category 2",))

		workingState.months.forEach(month => {
			expect(month.categories[1].categoryName).toEqual("Test Category 2")
			expect(month.categories[1].categoryGroup).toEqual("Test Group 2")
		});

	})

	it("should increment active month", () => {
		expect(budgetReducer(hasMonthsState, BudgetActions.nextMonthAction()).activeMonth)
			.toEqual(2);
	})

	it("should decrement active month", () => {
		expect(budgetReducer(hasMonthsState, BudgetActions.prevMonthAction()).activeMonth)
			.toEqual(0)
	})


})