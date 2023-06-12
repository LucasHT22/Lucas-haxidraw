const t = new Turtle();

for (let x = 59; x < +82; x++) {
t.forward(28);
t.arc(108, -26);
t.left(149);
t.forward(13);
t.right(2);
t.arc(30,52);
t.left(196);
t.forward(9);
}

drawTurtles(t);
