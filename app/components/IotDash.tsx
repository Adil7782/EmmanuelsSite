import React from "react";
import { FaThermometerHalf, FaTint, FaBolt, FaFan } from "react-icons/fa";

type CardProps = {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
};

const Card = ({ title, value, icon, color }: CardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
    <div className="flex justify-between items-center mb-4">
      <div>
        <h3 className="text-gray-500 font-medium">{title}</h3>
        <p className="text-3xl font-bold text-gray-900">{value}</p>
      </div>
      <div className={`p-3 rounded-full bg-${color}-100 text-${color}-600`}>
        {icon}
      </div>
    </div>
  </div>
);

type ChartProps = {
  title: string;
  value: string | number;
};

const Chart = ({ title, value }: ChartProps) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center justify-center h-64">
    <h3 className="text-gray-700 font-semibold mb-2">{title}</h3>
    <div className="text-4xl font-bold text-gray-800">{value}</div>
  </div>
);

const IotDash = () => {
  const sensorData = [
    {
      title: "Temperature",
      value: "22°C",
      icon: <FaThermometerHalf size={24} />,
      color: "red",
    },
    {
      title: "Humidity",
      value: "55%",
      icon: <FaTint size={24} />,
      color: "blue",
    },
    {
      title: "Power Usage",
      value: "120W",
      icon: <FaBolt size={24} />,
      color: "yellow",
    },
    {
      title: "Fan Speed",
      value: "1200 RPM",
      icon: <FaFan size={24} />,
      color: "green",
    },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        IoT Device Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {sensorData.map(({ title, value, icon, color }, index) => (
          <Card key={index} title={title} value={value} icon={icon} color={color} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sensorData.map(({ title, value }, index) => (
          <Chart key={index} title={title} value={value} />
        ))}
      </div>
    </div>
  );
};

export default IotDash;
