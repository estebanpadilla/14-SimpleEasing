window.addEventListener('load', init, false);
function init() {
    console.log('init');
    window.addEventListener('mousemove', mouseHandler, false);
    let canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext('2d');

    let ball = Ball(Vector(10, 100), 10, 'red', context);
    let t = Vector(300, 100);
    let v = Vector(0, 0);
    let ease = 0.05;

    update();
    function update() {

        context.clearRect(0, 0, window.innerWidth, window.innerHeight);

        dx = t.x - ball.position.x;
        dy = t.y - ball.position.y;
        v.x = dx * ease;
        v.y = dy * ease;
        ball.position.add(v);
        ball.update();

        requestAnimationFrame(update);
    }

    function mouseHandler(e) {
        t.x = e.clientX;
        t.y = e.clientY;

    }
}