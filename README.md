# Not-YNAB

This application is a budgeting app, it's not YNAB though, seriously.

To-do (In some kind of order-ish):

* Accounts - Adding accounts, only supporting current accounts for the moment.
* Transactions - Need to be able to add a inflow or outflow transaction and take the money from or add to the correct category.
* Age of money - Need to figure out how this is calculated on a technical level.
* Server - Some server stuff which persists the data to a mongo database.
* Backend Middleware - Some redux middleware for relevant actions which hits the server endpoints.
* Auth - Implement an authentication system for logging in.
* Testing - speaks for itself.

**--Release 1-- ALPHA**

* Schedule transactions - Allow transactions for in the future.
* Credit Cards - Have a credit card category and group be created when adding a new credit card account and have transactions redirect budgeted money there.
* Goals - Different type of goals to make monthly budeting easier.

**--Release 2-- BETA**

* Split Transactions - Ability to pay into or take money from multiple transactions at once.
* Reports (net worth) - A net worth over time report. Basically how much money is in accounts over time.
* Reports (spending) - Report how much is spent by category.

**--Release 3 -- 1.0**

* Mobile App - Need to make it usable on the go which will involve a mobile app.

Waaaaaaaaaay in the future if I can be bothered:

* dunno yet