const t = new Turtle();

for (let x = 59; x < +82; x++) {
t.forward(37);
t.arc(93, -22);
t.left(81);
t.forward(10);
t.right(12);
t.arc(30,32);
t.left(95);
t.forward(12);
}

drawTurtles(t);
