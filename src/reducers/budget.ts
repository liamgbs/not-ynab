import { AnyAction } from "redux";
import { Month } from "../types/categories";
import { BudgetActionTypes } from "../actions/types";
import {newMonthHelper} from "./helpers";

import moment from 'moment';

export interface BudgetState {
	months: Month[],
	activeMonth: number
}

const defaultState : BudgetState = {
	months : [
		{
			monthName: "Feb2019",
			toBeBudgeted: 0.0,
			categoryGroups: [
				{
					groupName: "Recreation",
					hidden: false
				},
				{
					groupName: "Savings",
					hidden: false
				}
			],
			categories: [
				{
					categoryName: "Holiday",
					categoryGroup: "Savings",
					budgeted: 50.2,
					activity: 0,
					balance: 50.2,
					hidden: false,
				},
				{
					categoryName: "House",
					categoryGroup: "Savings",
					budgeted: 10.2,
					activity: 0,
					balance: 10.2,
					hidden: false,
				},
			],
			ageOfMoney: 0,
			note: "test month"
		},
		{
			monthName: "Mar2019",
			toBeBudgeted: 0.0,
			categoryGroups: [
				{
					groupName: "Recreation",
					hidden: false
				},
				{
					groupName: "Savings",
					hidden: false
				}
			],
			categories: [
				{
					categoryName: "Holiday",
					categoryGroup: "Savings",
					budgeted: 0,
					activity: 0,
					balance: 0,
					hidden: false,
				},
				{
					categoryName: "House",
					categoryGroup: "Savings",
					budgeted: 0,
					activity: 0,
					balance: 0,
					hidden: false,
				},
			],
			ageOfMoney: 0,
			note: "test month"
		}
	],
	activeMonth: 0
}

export default (state: BudgetState = defaultState, action: AnyAction) => {	
	switch(action.type) {
		case BudgetActionTypes.CREATE_CATEGORY:
			return {...state, months: state.months.map(month => {
				return {...month, categories: [...month.categories, {
					categoryName: action.payload.categoryName,
					categoryGroup: action.payload.groupName,
					budgeted: 0,
					activity: 0,
					balance: 0,
					hidden: false,
				}]};
			})};
		case BudgetActionTypes.CREATE_CATEGORY_GROUP:
			return {...state, months: state.months.map(month => {
				return {...month, categoryGroups: [...month.categoryGroups, {
					groupName: action.payload,
					hidden: false
				}]};
			})};
		case BudgetActionTypes.APPEND_MONTH:
			const lastMonth = state.months[state.months.length - 1];
			const newMonthName = moment(lastMonth.monthName).add(1, "months").format("MMMYYYY");
			
			return {...state, months: [
				...state.months, newMonthHelper(lastMonth.categories, lastMonth.categoryGroups, newMonthName)]}
		case BudgetActionTypes.SET_NEXT_MONTH_ACTIVE:
			return {...state, activeMonth: state.activeMonth + 1}
		case BudgetActionTypes.SET_PREV_MONTH_ACTIVE:
			return {...state, activeMonth: state.activeMonth - 1}
		
	}
    return state;
}