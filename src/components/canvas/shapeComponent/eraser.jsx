import { Line } from "react-konva";

const Eraser = ({ shape }) => {

  return (
    <Line
      points={shape.points}
      stroke="white" // Стирание белым цветом (можно использовать фоновый цвет или другой подходящий)
      strokeWidth={20} // Размер ластика
      tension={1}
      lineCap="round"
      lineJoin="round"
      globalCompositeOperation={'destination-out'} // Удаляем пиксели при наложении линии ластика
    />
  );
}

export default Eraser