async function resolveAfterTwoSeconds(x) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(x);
		}, 2000);
	});
}

async function add1(x) {
  var a = resolveAfterTwoSeconds(20);
  var b = resolveAfterTwoSeconds(30);
  return x + await a + await b;
}

add1(10).then(v => {
  console.log(v);  // prints 60 after 2 seconds.
});
