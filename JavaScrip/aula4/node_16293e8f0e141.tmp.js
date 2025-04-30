// laços de repetição
//  for
//  for (condição) {
//  bloco de código 
//}

for (let i = 10; i <= 20; i++) {
    console.log(i);
}


for (let i = 20; i >= 10; i--) {
    console.log(i);
}


for (let i = 0; i <= 100; i += 10) {
    console.log(i);
}

//  while
//  while (condição) {
//  bloco de código 
//}

let i = 9;
while (i < 10) {
    console.log(i);
    i++;
}


let j = 10;
while (j > 0) {
    console.log(i);
    j--;
}

let k = 0;
while (k <= 100) {
    console.log(k);
    k += 10;
}

let l = 5;
do {
    console.log(l);
    l++;
} while (l < 10);

let m = 10;
do {
    console.log(m);
    m--;
} while (m > 0);

let v = 10;
let n = 9;
do {
    console.log(v);
    console.log(n);
    v--;
    n++;
} while (v > n);

// solução do edu
let edu1 = 1;
let edu2 = 10;
do {
    console.log(edu1,edu2);
    
    edu1++;
    edu2++;
} while (edu1 <= 2 && edu2 <= 12);


let  e = 15;
do while (e < 25) {
    console.log(e);
    e++;
} while (e < 15);


let  p = 0;
do while (p < 1) {
    console.log(p);
    p++;
} while (p < 100);

// break 
for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

// continue
for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}