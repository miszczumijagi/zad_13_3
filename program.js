
console.log('Version of Node is ' + process.version);
console.log(`This platform is ${process.platform}`);
switch (process.platform) {
	case 'linux':
		console.log('System language is ' + process.env.LANG);
		break;
	case 'win32':
		console.log('System language is ' + process.env.LANG);
		break;
	default:
		console.log('This is neither linux nor win32 system');

}

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
	// metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
	var input = process.stdin.read();
	if(input !== null) {
	 	var instruction = input.toString().trim();
	 	if (instruction === '/exit') {
		process.stdout.write('Quitting app!\n');
		process.exit();
		} else {
			process.stderr.write('Wrong instruction!\n');
		}
	}

})