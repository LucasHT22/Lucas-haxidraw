const t = new Turtle();

for (let x = 81; x < +112; x++) {
t.forward(2);
t.arc(73, 25);
t.right(-27);
t.arc(13,283);
t.left(97);
t.forward(16);
}

drawTurtles(t);
