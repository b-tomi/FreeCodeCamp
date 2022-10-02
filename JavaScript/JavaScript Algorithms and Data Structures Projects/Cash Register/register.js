/* Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/

function checkCashRegister(price, cash, cid) {
	// Values table for convenience
	const valuesTable = {
		PENNY: 0.01,
		NICKEL: 0.05,
		DIME: 0.1,
		QUARTER: 0.25,
		ONE: 1,
		FIVE: 5,
		TEN: 10,
		TWENTY: 20,
		"ONE HUNDRED": 100
	};

	// Calculate total currency in the register
	let regTotal = 0;
	for (let k in cid) {
		regTotal += cid[k][1];
	}

	let change = cash - price;
	const changeList = [];
	const cashList = [];
	// Insufficient change in register
	// Round the number to fix potential errors
	if (change > regTotal.toFixed(2)) {
		return { status: "INSUFFICIENT_FUNDS", change: [] };
		// Process in descending order
	} else {
		for (let i = cid.length - 1; i >= 0; i--) {
			let denom = cid[i][0];
			let val = valuesTable[denom];
			let count = 0;
			while (change.toFixed(2) > 0 && cid[i][1] > 0 && val <= change.toFixed(2)) {
				cid[i][1] -= val;
				change -= val;
				count += val;
			}
			if (count > 0) {
				changeList.push([ denom, count ]);
			}
			// To deal with the odd behavior of the last test case
			cashList.unshift([ denom, parseFloat(count.toFixed(2)) ]);
			// Skip processing the rest when not necessary
			if (change.toFixed(2) == 0) {
				break;
			}
		}
		if (change.toFixed(2) == 0 && (cash - price).toFixed(2) == regTotal.toFixed(2)) {
			// Exact change
			console.log(cashList);
			return { status: "CLOSED", change: cashList };
		} else if (change.toFixed(2) == 0) {
			// Regular change
			return { status: "OPEN", change: changeList };
		} else {
			// Sufficient change but in wrong denoms
			return { status: "INSUFFICIENT_FUNDS", change: [] };
		}
	}
}

checkCashRegister(19.5, 20, [
	[ "PENNY", 1.01 ],
	[ "NICKEL", 2.05 ],
	[ "DIME", 3.1 ],
	[ "QUARTER", 4.25 ],
	[ "ONE", 90 ],
	[ "FIVE", 55 ],
	[ "TEN", 20 ],
	[ "TWENTY", 60 ],
	[ "ONE HUNDRED", 100 ]
]);
