import test from "ava";

const macro = test.macro((t, input, expected) => {
	t.is(eval(input), expected);
});

// test('sum', macro, '1 + 2', 3);

// #test('subtract', macro, '3 - 2', 1);

// test('multiply', macro, '3 * 5', 15);

// test('divide', macro, '8 / 2', 4);
