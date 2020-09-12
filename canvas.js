let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let c = canvas.getContext('2d');

// c.fillStyle = 'rgba(255, 0, 0, 0.5)';
// c.fillRect(100, 100, 100, 200);
// c.fillStyle = 'gray';
// c.fillRect(400, 350, 200, 300);

//line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(300, 300);
// c.strokeStyle = 'blue';
// c.moveTo(300, 500);
// c.lineTo(400, 300);
// c.stroke();

//arc/ circle
// c.beginPath();
// c.arc(500, 450, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'red';
// c.stroke();

// for (let i = 0; i < 100; i++) {
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;
//     c.strokeStyle = `rgb(
//         ${Math.floor(255 - 10 + i)},
//         ${Math.floor(255 - 30 + i)},
//         ${Math.floor(255 - 50 + i)})`;
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.stroke();
// }

// function Circle(x, y) {
//     this.x = x;
//     this.y = y;

//     this.draw = function () {

//     }
// }

// let Circle = new Circle(200, 200);

let x = Math.random() * innerWidth;
let y = Math.random() * innerHeight;
// let dx = Math.random() - 0.5; ako oces random brzinu
// let dy = Math.random() - 0.5;
let dx = 3;
let dy = 3;
let radius = 30;
let centerY = 0;
let centerX = 0;
function animate() {




    requestAnimationFrame(animate)
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.strokeStyle = 'red';
    c.stroke();
    if (x + radius > innerWidth || x - radius < 0) {
        dx = -dx;
    }
    if (y + radius > innerHeight || y - radius < 0) {
        dy = -dy;
    }
    x += dx;
    y += dy;
}
animate();