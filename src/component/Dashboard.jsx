import React from "react";
import { SlCalender } from "react-icons/sl";
import { TbReportAnalytics } from "react-icons/tb";
import { SiGoogleclassroom } from "react-icons/si";
import { PiStudentBold } from "react-icons/pi";

function Dashboard(props) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex justify-between items-center p-5">
        <p className="text-2xl font-semibold text-black">Dashboard</p>
        <p className="text-red-500 font-semibold cursor-pointer">Logout</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 gap-y-10 mt-24 p-5 bg-grid-pattern">
        <div className="flex flex-col gap-y-4 text-center border border-gray-200 items-center shadow-md w-fit p-5 rounded-md">
          <div className="bg-pink-100 w-fit p-5 rounded-xl shadow-md">
            <SlCalender />
          </div>
          <div className="flex items-center">
            <p className="font-semibold">Daily Attendance</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 border border-gray-200 items-center shadow-md p-5 rounded-md">
          <div className="bg-pink-100 w-fit p-5 rounded-xl shadow-md">
            <TbReportAnalytics />
          </div>
          <div className="flex items-center">
            <p className="font-semibold">Analytics</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 border border-gray-200 items-center text-center shadow-md p-5 rounded-md">
          <div className="bg-pink-100 p-5 rounded-xl shadow-md">
            <PiStudentBold />
          </div>
          <p className="font-semibold">Student Attendance</p>
        </div>
        <div className="flex flex-col gap-y-4 border border-gray-200 items-center text-center shadow-md p-5 rounded-md">
          <div className="bg-pink-100 w-fit p-5 rounded-xl shadow-md">
            <SiGoogleclassroom />
          </div>
          <div className="flex items-center">
            <p className="font-semibold">Lecture Attendance</p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 text-black p-4 shadow-lg">
        <div className="grid grid-cols-4 gap-4 text-center">
          <div className="flex flex-col items-center">
            <SlCalender className="text-2xl" />
            <p className="text-xs">Attendance</p>
          </div>
          <div className="flex flex-col items-center">
            <TbReportAnalytics className="text-2xl" />
            <p className="text-xs">Analytics</p>
          </div>
          <div className="flex flex-col items-center">
            <SiGoogleclassroom className="text-2xl" />
            <p className="text-xs">Lectures</p>
          </div>
          <div className="flex flex-col items-center">
            <PiStudentBold className="text-2xl" />
            <p className="text-xs">Students</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
