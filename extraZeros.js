function zeros(n) {
	let calFact = (n) => {
		if (n <= 1) return 1;
		return n * calFact(n - 1);
	};
	let fatc = calFact(n);
	console.log(fatc);
	let count = 0;
	let reversedFact = String(fatc).split("").reverse();
	reversedFact.forEach((el) => {
		while (el === "0") counut++;
	});
	return count;
	asas;
}

console.log(zeros(12));
