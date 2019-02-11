export enum AppActionTypes {
	CHANGE_VIEW = "CHANGE_VIEW",
	REDIRECT_TO_BUDGET = "REDIRECT_TO_BUDGET",
	REDIRECT_TO_REPORTS = "REDIRECT_TO_REPORTS",
	REDIRECT_TO_ACCOUNTS = "REDIRECT_TO_ACCOUNTS",
}

export enum BudgetActionTypes {
	CREATE_CATEGORY = "CREATE_CATEGORY",
	CREATE_CATEGORY_GROUP = "CREATE_CATEGORY_GROUP",
	SET_NEXT_MONTH_ACTIVE = "SET_NEXT_MONTH_ACTIVE",
	SET_PREV_MONTH_ACTIVE = "SET_PREV_MONTH_ACTIVE",
	APPEND_MONTH = "APPEND_MONTH"
}