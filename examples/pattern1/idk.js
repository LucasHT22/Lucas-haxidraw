const t = new Turtle();

for (let x = 59; x < +105; x++) {
t.forward(-10);
t.arc(93, 19);
t.right(110);
t.arc(23,32);
t.left(97);
t.forward(8);
}

drawTurtles(t);
