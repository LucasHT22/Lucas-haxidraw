const t = new Turtle();

for (let x = 59; x < +83; x++) {
t.forward(40);
t.arc(99, 8);
t.left(95);
t.forward(52);
t.right(69);
t.arc(30,52);
t.left(197);
t.forward(9);
}

drawTurtles(t);
