
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/* Everything inside this addEventListener occurs when
   you resize the page.
 */
window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    //Drawing the sun
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.arc(430, 100, 50, 0, Math.PI * 2);
    ctx.fill();

    //Drawing the house
    ctx.save();
    ctx.translate(20, 450)
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.fillRect(0, 0, 450, 350);
    ctx.fill();
    ctx.restore();

    //The Roof
    ctx.save(); // Bookmark the current state (origin at 0,0)
    ctx.translate(245, 225);
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.rotate(45* Math.PI / 180);
    ctx.fillRect(0, 0, 318, 318);
    ctx.fill();
    ctx.restore();

  //Drawing the left window
    ctx.save(); // Bookmark the current state (origin at 0,0)
    ctx.translate(50, 475);
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.fillRect(0, 0, 100, 100);
    ctx.stroke();
    ctx.fill();
    ctx.restore();

    //Drawing the right window
    ctx.save(); // Bookmark the current state (origin at 0,0)
    ctx.translate(330, 475);
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.fillRect(0, 0, 100, 100);
    ctx.stroke();
    ctx.fill();
    ctx.restore();

    //Drawing the Door
    ctx.save(); // Bookmark the current state (origin at 0,0)
    ctx.translate(180, 580);
    ctx.fillStyle = 'brown';
    ctx.beginPath();
    ctx.fillRect(0, 0, 125, 175);
    ctx.fill();
    ctx.restore();
    
    //Doorknob
    ctx.fillStyle = 'gold';
    ctx.beginPath();
    ctx.arc(290, 690, 10, 0, Math.PI * 2);
    ctx.fill();

    //The Grass
    ctx.save();
    ctx.fillStyle = '#004400';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.fillRect(0, 750, canvas.width, 40);
    ctx.fill();
    ctx.restore();

    // Drawing the caption text on the canvas
    ctx.fillStyle = 'black';
    ctx.font = '30px Arial';
    ctx.fillText('Welcome to My Home', 35, 50);

// Drawing the caption text on the canvas
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.fillText('Use your mouse to add grass!', 35, 100);

})

    //Drawing the sun
    ctx.fillStyle = 'yellow';
    ctx.beginPath();
    ctx.arc(430, 100, 50, 0, Math.PI * 2);
    ctx.fill();
    
    //Drawing the house
    ctx.save();
    ctx.translate(20, 450)
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.fillRect(0, 0, 450, 350);
    ctx.fill();
    ctx.restore();

    //The Roof
    ctx.save(); // Bookmark the current state (origin at 0,0)
    ctx.translate(245, 225);
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.rotate(45* Math.PI / 180);
    ctx.fillRect(0, 0, 318, 318);
    ctx.fill();
    ctx.restore();

  //Drawing the left window
    ctx.save(); // Bookmark the current state (origin at 0,0)
    ctx.translate(50, 475);
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.fillRect(0, 0, 100, 100);
    ctx.stroke();
    ctx.fill();
    ctx.restore();

    //Drawing the right window
    ctx.save(); // Bookmark the current state (origin at 0,0)
    ctx.translate(330, 475);
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.fillRect(0, 0, 100, 100);
    ctx.stroke();
    ctx.fill();
    ctx.restore();

    //Drawing the Door
    ctx.save(); // Bookmark the current state (origin at 0,0)
    ctx.translate(180, 580);
    ctx.fillStyle = 'brown';
    ctx.beginPath();
    ctx.fillRect(0, 0, 125, 175);
    ctx.fill();
    ctx.restore();
    
    //Doorknob
    ctx.fillStyle = 'gold';
    ctx.beginPath();
    ctx.arc(290, 690, 10, 0, Math.PI * 2);
    ctx.fill();

    //The Grass
    ctx.save();
    ctx.fillStyle = '#004400';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.fillRect(0, 750, canvas.width, 40);
    ctx.fill();
    ctx.restore();

    // Drawing the caption text on the canvas
    ctx.fillStyle = 'black';
    ctx.font = '30px Arial';
    ctx.fillText('Welcome to My Home', 35, 50);

// Drawing the caption text on the canvas
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.fillText('Use your mouse to add grass!', 35, 100);



const mouse = {
    x: null,
    y: null,
}

canvas.addEventListener('click', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    drawGrass();
});

// Used online resources to help me draw the grass and triangle.

/*

My initial attempt to draw grass:

Just a Horizontal Green line:
ctx.fillStyle = 'green';
ctx.strokeStyle = 'green';
ctx.lineWidth = 5;
ctx.beginPath();
ctx.fillRect(0, 750, canvas.width, 40);
ctx.stroke();
ctx.fill();

To draw grass strips using eventListener:
function drawGrass() {
    for (let i = 0; i < canvas.width; i += 5) {
        ctx.fillStyle = '#';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.fillRect(mouse.x, mouse.y , 10, 50);
        ctx.stroke();
        ctx.fill();
    }
}

*/

//Draws grass when mouse clicked
function drawGrass() {
    for (let i = 0; i < canvas.width; i += 5) {
        ctx.beginPath();
        ctx.moveTo(i, canvas.height);
        // Draw blade with random height and slight curve
        ctx.lineTo(i + (Math.random() * 20 - 10), canvas.height - 40 - Math.random() * 50);
        ctx.stroke();
    }
}
function drawGrass() {
    const gradient = ctx.createLinearGradient(0, canvas.height, 0, canvas.height - 100);
    gradient.addColorStop(0, '#004400'); // Dark green bottom
    gradient.addColorStop(1, '#22cc22'); // Light green top

    ctx.strokeStyle = gradient;
    ctx.lineWidth = 2;

    for (let i = 0; i < canvas.width; i += 5) {
        ctx.beginPath();
        ctx.moveTo(i, canvas.height);
        // Draw blade with random height and slight curve
        ctx.lineTo(i + (Math.random() * 20 - 10), canvas.height - 40 - Math.random() * 50);
        ctx.stroke();
    }
}

// Drawing the caption text on the canvas
ctx.fillStyle = 'black';
ctx.font = '30px Arial';
ctx.fillText('Welcome to My Home', 35, 50);

// Drawing the caption text on the canvas
ctx.fillStyle = 'black';
ctx.font = '20px Arial';
ctx.fillText('Use your mouse to add grass!', 35, 100);












