function Counter() {
    this.value=0;
    this.add = amount => {
        this.value += amount;
    }
}


const counter = new Counter();
console.log(counter.value);
counter.add(5);
console.log(counter.value);

const add = counter.add;
add(5);
console.log(counter.value);




function Counter2() {
    this.value=0;
    this.add = function (amount) {
        this.value += amount;
    }
}


const counter2 = new Counter2();
console.log(counter2.value);
counter2.add(5);
console.log(counter2.value);
const add2 = counter2.add;
add2(5);
console.log(counter2.value);



//this 는 동적 호출되는 주체에따라서 바뀐다. 하지만 () => function 는 정적 생성된시점의 스코프의 객체를 가르킨다.  

