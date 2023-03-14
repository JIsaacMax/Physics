// Adicione este código ao arquivo app.js
// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;
    World = Matter.World;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false
    }
});

// create two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(450, 50, 80, 80);
var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// add all of the bodies to the world
Composite.add(engine.world, [boxA, boxB, ground]);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);

// Adicione este código para criar um elemento interativo quando o botão for clicado
var criarElemento = function() {
  // criar um elemento HTML
  var elemento = document.createElement('div');
  elemento.innerText = 'Este é um elemento interativo!';

  // definir a posição do elemento
  elemento.style.position = 'absolute';
  elemento.style.top = Math.floor(Math.random() * window.innerHeight) + 'px';
  elemento.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';

  // adicionar o elemento ao body
  document.body.appendChild(elemento);
};

// add a mouse down handler to the canvas
render.canvas.addEventListener('mousedown', function(event) {
    // get the position of the click
    var position = mouse.position;

    // create a new circle with random velocity
    var circle = Bodies.circle(position.x, position.y, 20, {
        restitution: 0.5,
        friction: 0.2,
        density: 0.1,
        velocity: {
            x: Math.random() * 10 - 5,
            y: Math.random() * 10 - 5
        }
        
    });

    // add the new circle to the world
    Composite.add(engine.world, circle);
});


// adicionar um evento de clique ao botão
var botao = document.getElementById('criar-elemento');
botao.addEventListener('click', criarElemento);

// Adicione este código para adicionar o cursor do mouse como um elemento interativo do mundo do Matter.js
var mouse = Matter.Mouse.create(render.canvas);
var mouseConstraint = Matter.MouseConstraint.create(engine, {
  mouse: mouse,
  constraint: {
    stiffness: 0.2,
    render: {
      visible: false
    }
  }
});
Composite.add(engine.world, mouseConstraint);
Composite.add(engine.   world, [boxA, boxB, ground]);

render.mouse = mouse;

//+++++++++++++++++++==========================================================================================================================================

// // module aliases
// var Engine = Matter.Engine,
//     Render = Matter.Render,
//     Runner = Matter.Runner,
//     Bodies = Matter.Bodies,
//     World = Matter.World,
//     Mouse = Matter.Mouse,
//     MouseConstraint = Matter.MouseConstraint;

// // create an engine
// var engine = Engine.create();

// // create a renderer
// var render = Render.create({
//     element: document.body,
//     engine: engine,
//     options: {
//         width: window.innerWidth,
//         height: window.innerHeight,
//         wireframes: false
//     }
// });

// set the size of the canvas to fill the screen
render.canvas.style.position = 'absolute';
render.canvas.style.top = 0;
render.canvas.style.left = 0;
render.canvas.style.width = window.innerWidth + 'px';
render.canvas.style.height = window.innerHeight + 'px';

// set the size of the world to match the size of the canvas
engine.world.bounds = {
    min: { x: 0, y: 0 },
    max: { x: window.innerWidth, y: window.innerHeight }
};


// set the size of the world to match the size of the canvas
engine.world.bounds.min.x = 0;
engine.world.bounds.min.y = 0;
engine.world.bounds.max.x = window.innerWidth;
engine.world.bounds.max.y = window.innerHeight;

// create a ground
var ground = Bodies.rectangle(window.innerWidth / 2, window.innerHeight - 20, window.innerWidth, 40, {
    isStatic: true
});

// add the ground to the world
World.add(engine.world, ground);

// add a mouse constraint
var mouse = Mouse.create(render.canvas);
var mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        stiffness: 0.2,
        render: {
            visible: false
        }
    }
});
World.add(engine.world, mouseConstraint);

// add a click handler to the canvas
render.canvas.addEventListener('click', function(event) {
    var radius = Math.random() * 20 + 10;
    var circle = Bodies.circle(event.clientX, event.clientY, radius, {
        density: 0.05,
        frictionAir: 0.01,
        restitution: 0.5
    });
    World.add(engine.world, circle);
});

// run the renderer
Render.run(render);

// create a runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);
