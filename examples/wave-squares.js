const t = new Turtle();

for (let x = 96; x < +122; x++) {
t.forward(35);
t.arc(73, 25);
t.right(-27);
t.arc(13,283);
t.left(97);
t.forward(16);
}

drawTurtles(t);
