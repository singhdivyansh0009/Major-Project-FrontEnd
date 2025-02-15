import React, { useState } from 'react';

const DailyAttendence = () => {
  const [selectedDate, setSelectedDate] = useState('6');

  const days = [
    { date: '06', day: 'TUE', punchIn: '09:08 AM', punchOut: '06:05 PM', total: '08:13', color: 'bg-green-500' },
    { date: '07', day: 'TUE', punchIn: '09:08 AM', punchOut: '06:05 PM', total: '08:13', color: 'bg-yellow-500' },
    { date: '08', day: 'TUE', punchIn: '09:08 AM', punchOut: '06:05 PM', total: '08:13', color: 'bg-red-500' },
    { date: '09', day: 'TUE', punchIn: '09:08 AM', punchOut: '06:05 PM', total: '08:13', color: 'bg-green-500' },
    { date: '06', day: 'TUE', punchIn: '09:08 AM', punchOut: '06:05 PM', total: '08:13', color: 'bg-green-500' },
    { date: '07', day: 'TUE', punchIn: '09:08 AM', punchOut: '06:05 PM', total: '08:13', color: 'bg-yellow-500' },
    { date: '08', day: 'TUE', punchIn: '09:08 AM', punchOut: '06:05 PM', total: '08:13', color: 'bg-red-500' },
    { date: '09', day: 'TUE', punchIn: '09:08 AM', punchOut: '06:05 PM', total: '08:13', color: 'bg-green-500' },
    { date: '06', day: 'TUE', punchIn: '09:08 AM', punchOut: '06:05 PM', total: '08:13', color: 'bg-green-500' },
    { date: '07', day: 'TUE', punchIn: '09:08 AM', punchOut: '06:05 PM', total: '08:13', color: 'bg-yellow-500' },
    { date: '08', day: 'TUE', punchIn: '09:08 AM', punchOut: '06:05 PM', total: '08:13', color: 'bg-red-500' },
    { date: '09', day: 'TUE', punchIn: '09:08 AM', punchOut: '06:05 PM', total: '08:13', color: 'bg-green-500' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center max-w-md mx-auto" style={{ maxWidth: '420px' }}>
      {/* Header */}
      <h2 className="text-xl font-bold mb-4 self-start">Attendance History</h2>
      {/* Attendance Records */}
      <div className="w-full flex flex-col gap-3 mb-16">
        {days.map((day) => (
          <div
            key={day.date}
            className="flex items-center bg-white shadow-md rounded-lg p-3"
          >
            <div
              className={`w-12 h-12 ${day.color} text-white flex flex-col items-center justify-center rounded-md mr-4`}
            >
              <span className="text-lg font-bold">{day.date}</span>
              <span className="text-xs">{day.day}</span>
            </div>
            <div className="flex-1 flex justify-between text-sm">
              <div>
                <p className="font-semibold">{day.punchIn}</p>
                <p className="text-gray-500">Punch In</p>
              </div>
              <div>
                <p className="font-semibold">{day.punchOut}</p>
                <p className="text-gray-500">Punch Out</p>
              </div>
              <div>
                <p className="font-semibold">{day.total}</p>
                <p className="text-gray-500">Total Hours</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyAttendence;
