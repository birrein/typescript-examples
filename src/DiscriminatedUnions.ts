interface Square {
  type: 'square';
  size: number;
}

interface Rectangle {
  type: 'rectangle';
  height: number;
}

interface Circle {
  type: 'circle';
  radius: number;
}

type Shape = Square | Rectangle | Circle;

function print(shape: Shape) {
  switch (shape.type) {
    case 'square':
      console.log(`El tamaño de la figura es ${shape.size}`);
      break;
    case 'rectangle':
      console.log(`El tamaño de la figura es ${shape.height}`);
      break;
    case 'circle':
      console.log(`El tamaño de la figura es ${shape.radius}`);
      break;
    default:
      break;
  }
}
