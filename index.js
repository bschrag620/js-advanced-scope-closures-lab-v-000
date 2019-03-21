function returnIntFromString(streetName) {
	return parseInt(streetName.slice(0, 2))
}

function produceDrivingRange(blockRange) {
	const max = blockRange;

	return function(start, stop) {
		const length = Math.abs(returnIntFromString(start) - returnIntFromString(stop));
		if (length <= max) {
				return `within range by ${max - length}`
		}
		else {
			return `${length - max} blocks out of range`
		}
	}
}

function produceTipCalculator(percentage) {
	const tipPercentage = percentage;

	return function(cost) {
		return cost * tipPercentage
	}
}

function createDriver() {
	let driverId = 1;

	return class Driver {
		constructor(name) {
			this.name = name;
			this.id = driverId;
			driverId++;
		}
	}
}