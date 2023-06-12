const t = new Turtle();

for (let x = 90; x < +135; x++) {
t.forward(196.9);
t.arc(230, 250);
t.right(-148);
t.arc(220,250);
t.left(241);
t.forward(63.7);
}

drawTurtles(t);
