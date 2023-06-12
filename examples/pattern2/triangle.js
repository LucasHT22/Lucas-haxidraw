const t = new Turtle();

for (let x = 59; x < +82; x++) {
t.forward(37);
t.arc(93, -22);
t.left(149);
t.forward(13);
t.right(4);
t.arc(30,32);
t.left(93);
t.forward(9);
}

drawTurtles(t);
