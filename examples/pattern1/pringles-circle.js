const t = new Turtle();

for (let x = 81; x < +112; x++) {
t.forward(2);
t.arc(-22, 25);
t.right(-128);
t.arc(50,25);
t.left(-10);
t.forward(15);
}

drawTurtles(t);
