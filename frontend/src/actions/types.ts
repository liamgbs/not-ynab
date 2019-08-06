export enum AppActionTypes {
	CHANGE_VIEW = "CHANGE_VIEW",
	REDIRECT_TO_BUDGET = "REDIRECT_TO_BUDGET",
	REDIRECT_TO_REPORTS = "REDIRECT_TO_REPORTS",
	REDIRECT_TO_ACCOUNTS = "REDIRECT_TO_ACCOUNTS",
	ERROR = "ERROR",
	DO_NOTHING = "DO_NOTHING"
	
}

export enum BudgetActionTypes {
	CREATE_CATEGORY = "CREATE_CATEGORY",
	CREATE_CATEGORY_GROUP = "CREATE_CATEGORY_GROUP",
	SET_NEXT_MONTH_ACTIVE = "SET_NEXT_MONTH_ACTIVE",
	SET_PREV_MONTH_ACTIVE = "SET_PREV_MONTH_ACTIVE",
	APPEND_MONTH = "APPEND_MONTH",
	SET_CATEGORY_BUDGETED = "SET_CATEGORY_BUDGETED",
	ADD_TO_ACTIVITY = "ADD_TO_ACTIVITY"
}

export enum AccountActionTypes {
	SET_ACTIVE_ACCOUNT = "SET_ACTIVE_ACCOUNT",
	CREATE_ACCOUNT = "CREATE_ACCOUNT",
	ADD_TO_BALANCE = "ADD_TO_BALANCE"
}

export enum TransactionActionTypes {
	ADD_TRANSACTION = "ADD_TRANSACTION",
	TRIGGER_NEW_TRANSACTION = "TRIGGER_NEW_TRANSACTION",
	CANCEL_NEW_TRANSACTION = "CANCEL_NEW_TRANSACTION",
	EDIT_TRANSACTION = "EDIT_TRANSACTION",
	SELECT_TRANSACTION = "SELECT_TRANSACTION",
	UNSELECT_TRANSACTION = "UNSELECT_TRANSACTION",
	CLEAR_SELECTED = "CLEAR_SELECTED",
	DELETE_TRANSACTION = "DELETE_TRANSACTION"
}

export enum PayeesActionTypes {
	ADD_PAYEE = "ADD_PAYEE",
}

export enum UserActionTypes {
	SET_AUTHED = "SET_AUTHED",
	SET_UNAUTHED = 'SET_UNAUTHED' 
}