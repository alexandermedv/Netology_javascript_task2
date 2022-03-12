function prime(n){

    for (let i = 2; i <= n; i++) { 
        
        f=true
        for (let j = 2; j < i; j++) { 
            if (i % j == 0) {f=false};
        }

        if (f) {console.log(i)}; // простое число
    }
    return 'Все простые числа выведены'
}

console.log(prime(+process.argv[2]));