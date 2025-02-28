import { Card, CardContent } from "@/components/ui/card";
import Countdown from "react-countdown";


const CountdownTimer = () => {
  const targetDate = new Date("2025-02-10T10:15:00").getTime(); // Your target date

  return (
    <div className="flex justify-center items-center gap-4 p-4 bg-gray-100 rounded-lg">
      <Countdown
        date={targetDate}
        renderer={({ days, hours, minutes, seconds }) => (
          <>
            <Card className="w-24 bg-black">
              <CardContent className="text-center">
                <p className="text-4xl font-bold text-white">{days}</p>
                <p className="text-sm text-gray-600 uppercase">Days</p>
              </CardContent>
            </Card>
            <Card className="w-24">
              <CardContent className="text-center">
                <p className="text-4xl font-bold text-gray-900">{hours}</p>
                <p className="text-sm text-gray-600 uppercase">Hours</p>
              </CardContent>
            </Card>
            <Card className="w-24">
              <CardContent className="text-center">
                <p className="text-4xl font-bold text-gray-900">{minutes}</p>
                <p className="text-sm text-gray-600 uppercase">Minutes</p>
              </CardContent>
            </Card>
            <Card className="w-24">
              <CardContent className="text-center">
                <p className="text-4xl font-bold text-gray-900">{seconds}</p>
                <p className="text-sm text-gray-600 uppercase">Seconds</p>
              </CardContent>
            </Card>
          </>
        )}
      />
    </div>
  );
};

export default CountdownTimer;
