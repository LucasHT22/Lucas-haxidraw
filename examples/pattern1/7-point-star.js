const t = new Turtle();

for (let x = 96; x < +105; x++) {
t.forward(5);
t.arc(4, 16);
t.right(-2);
t.arc(0,807);
t.left(97);
t.forward(152);
}

drawTurtles(t);
