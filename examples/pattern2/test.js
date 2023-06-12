const t = new Turtle();

for (let x = 59; x < +118; x++) {
t.forward(-10);
t.arc(93, -22);
t.left(5);
t.forward(10);
t.right(110);
t.arc(23,32);
t.left(116);
t.forward(12);
}

drawTurtles(t);
