const t = new Turtle();

for (let x = 59; x < +83; x++) {
t.forward(40);
t.arc(108, 8);
t.left(149);
t.forward(13);
t.right(2);
t.arc(30,52);
t.left(248);
t.forward(9);
}

drawTurtles(t);
