const t = new Turtle();

for (let x = 81; x < +112; x++) {
t.forward(2);
t.arc(73, 25);
t.right(-82);
t.arc(74,25);
t.left(97);
t.forward(15);
}

drawTurtles(t);
