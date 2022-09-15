// Bài 1

// let a = [
//     [1, 2, 1, 24],
//     [8, 11, 9, 4],
//     [7, 0, 7, 27],
//     [7, 4, 28, 14],
//     [3, 10, 26, 7]
// ];
//
// for (let i = 0; i < 5; i++) {
//     document.write('row ' + i + '<br>')
//     for (let j = 0; j < a[i].length; j++) {
//         document.write(a[i][j] + '<br>');
//     }
//     document.write('<br>')
// }

// Bài 2
// let arr = ['c', 's', 'c', '2', '6', '1'];
// arr.reverse();
// alert(arr.join(''));

// Bài 3
// let arr = ['c', 's', 'c',2,6,1];
// let num = [];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == "number") {
//         num.push(arr[i]);
//     }
// }
// alert(num.length)

// Bài 4
// let str = prompt('Nhập vào một chuỗi');
// let arr = str.split(' ');
// let res = arr.filter(deleteSpace);
// function deleteSpace(index) {
//     return index != '';
// }
// alert(res.length);
// hoặc
// let str = prompt('Nhập vào một chuỗi');
// let arr = str.split(' ');
// let w = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] != '') {
//         w.push(arr[i]);
//     }
// }
// alert(w.length);


// Bài 5
// let arr1 = 'Hello I am Lam';
// let arr2 = 'Hello I am Lam';
// if (arr1.length == arr2.length) {
//     for (let i = 0; i < arr1.length;i++) {
//         if (arr1[i] != arr2[i]) {
//             alert('2 chuỗi không giống nhau')
//         } else if (i == (arr1.length - 1)) {
//             alert('2 chuỗi  giống nhau')
//         }
//     }
// } else {
//     alert('2 chuỗi không giống nhau')
// }

// Bài 6
// let arr = ['(-)', 'c', 1, '.', '(-)'];
// let newArr = arr.map(function (item) {
//     if (item == '(-)') {
//         return '(_)';
//     } else {
//         return item;
//     }
// })
// alert(newArr);



















