function* gen() {
	// Передаём вопрос во внешний код и ожидаем ответа
	let result = yield "2 + 2 = ?"; // (*)

	alert(result);
}

let generator = gen();

let question = generator.next().value; // <-- yield возвращает значение

generator.next(4); // --> передаём результат в генератор

console.log(question);
