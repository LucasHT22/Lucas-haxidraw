const t = new Turtle();

for (let x = 81; x < +112; x++) {
t.forward(-110);
t.arc(50, 25);
t.right(-148);
t.arc(220,250);
t.left(-10);
t.forward(63.7);
}

drawTurtles(t);
