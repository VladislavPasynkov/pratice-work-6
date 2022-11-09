let array = [];
let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
 
let day = 'среда';
let indexWeek;
 
for (let i = 1; i < 32; i++){
    array.push(i);
}
 
for ( let i = 0; i < week.length; i++) {
    if (week[i] == day ) {
        indexWeek = i;
    }
}
 
for (let elem of array) {
    for (let y = indexWeek; y < week.length; y++) {
        if (y == 6) {
            indexWeek = 0;
        }
        console.log(`${elem} января, ${week[y]}`);
    }
}