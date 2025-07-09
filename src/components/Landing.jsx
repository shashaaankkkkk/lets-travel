import React, { useState, useRef, useEffect } from 'react';
import { Search } from "lucide-react";
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

// Mock DateRange component since we don't have access to react-date-range
const DateRange = ({ ranges, onChange, editableDateInputs, moveRangeOnFirstSelection, className }) => {
  const [startDate, setStartDate] = useState(ranges[0].startDate);
  const [endDate, setEndDate] = useState(ranges[0].endDate);

  const handleStartChange = (e) => {
    const newStart = new Date(e.target.value);
    setStartDate(newStart);
    onChange({
      selection: {
        startDate: newStart,
        endDate: endDate,
        key: 'selection'
      }
    });
  };

  const handleEndChange = (e) => {
    const newEnd = new Date(e.target.value);
    setEndDate(newEnd);
    onChange({
      selection: {
        startDate: startDate,
        endDate: newEnd,
        key: 'selection'
      }
    });
  };

  return (
    <div className={`${className} p-4 border rounded-lg`}>
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium mb-1">Start Date</label>
          <input
            type="date"
            value={startDate.toISOString().split('T')[0]}
            onChange={handleStartChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">End Date</label>
          <input
            type="date"
            value={endDate.toISOString().split('T')[0]}
            onChange={handleEndChange}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
    </div>
  );
};

function Landing() {
  const [location, setLocation] = useState("Lakshadweep");
  const [persons, setPersons] = useState(2);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    }
  ]);
  const [pickerPosition, setPickerPosition] = useState({ top: 0, left: 0 });

  const dateButtonRef = useRef(null);
  const datePickerRef = useRef(null);

  // Update picker position when showing
  const updatePickerPosition = () => {
    if (dateButtonRef.current) {
      const rect = dateButtonRef.current.getBoundingClientRect();
      setPickerPosition({
        top: rect.bottom + window.scrollY + 8,
        left: rect.left + window.scrollX
      });
    }
  };

  // Close date picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target) &&
          dateButtonRef.current && !dateButtonRef.current.contains(event.target)) {
        setShowDatePicker(false);
      }
    };

    if (showDatePicker) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [showDatePicker]);

  const handleDateButtonClick = () => {
    if (!showDatePicker) {
      updatePickerPosition();
    }
    setShowDatePicker(!showDatePicker);
  };

  const handleDateSelect = (ranges) => {
    setDateRange([ranges.selection]);
    setShowDatePicker(false);
  };

  const locations = ["Lakshadweep", "Manali", "Shimla", "Jaipur", "Kedarnath"];
  const personOptions = [1, 2, 3, 4, 5, 6];

  const format = (date, formatStr) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const day = date.getDate().toString().padStart(2, '0');
    const month = months[date.getMonth()];
    return `${day} ${month}`;
  };

  const formattedDate = `${format(dateRange[0].startDate, 'dd MMM')} - ${format(dateRange[0].endDate, 'dd MMM')}`;

const BookingCard = ({ isDesktop }) => (
  <Card
    className={`relative overflow-visible bg-white/40 rounded-3xl shadow-lg backdrop-blur-md border border-white/30 ${
      isDesktop ? 'z-10' : 'sticky bottom-4 z-50'
    }`}
  >
    <CardContent className="p-4 sm:p-6 relative">
      <div className="space-y-4 relative">
        <div className="grid grid-cols-3 gap-3 sm:gap-4 relative">
          {/* Location */}
          <div className="space-y-1 relative z-10">
            <label className="font-semibold text-black text-sm sm:text-base">Location</label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2 rounded-md bg-white border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-[#97d9c8] text-sm sm:text-base shadow-sm"
            >
              {locations.map(loc => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* Date */}
          <div className="space-y-1 relative z-10">
            <label className="font-semibold text-black text-sm sm:text-base">Date</label>
            <button
              ref={dateButtonRef}
              type="button"
              onClick={handleDateButtonClick}
              className="w-full p-2 rounded-md bg-white border border-gray-300 text-left text-black focus:outline-none focus:ring-2 focus:ring-[#97d9c8] text-sm sm:text-base shadow-sm"
            >
              {formattedDate}
            </button>
          </div>

          {/* Persons */}
          <div className="space-y-1 relative z-10">
            <label className="font-semibold text-black text-sm sm:text-base">Persons</label>
            <select
              value={persons}
              onChange={(e) => setPersons(Number(e.target.value))}
              className="w-full p-2 rounded-md bg-white border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-[#97d9c8] text-sm sm:text-base shadow-sm"
            >
              {personOptions.map(p => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Search Button */}
        <div className="flex justify-center pt-2">
          <Button className="w-14 h-14 sm:w-16 sm:h-16 bg-[#97d9c8] hover:bg-[#85c7b6] rounded-2xl shadow-lg">
            <Search className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Date Picker Portal - Fixed positioning to appear above everything */}
      {showDatePicker && (
        <div 
          ref={datePickerRef}
          className="fixed z-[99999] min-w-[280px]"
          style={{
            top: `${pickerPosition.top}px`,
            left: `${pickerPosition.left}px`,
          }}
        >
          <DateRange
            editableDateInputs
            onChange={handleDateSelect}
            moveRangeOnFirstSelection={false}i
            ranges={dateRange}
            className="bg-white shadow-xl border rounded-lg"
          />
        </div>
      )}
        {/* Mobile Layout */}
        <div className="lg:hidden px-4 py-8">
          {/* Hero Section */}
          <div className="mb-8">
            <div className="relative mb-6">
              <h1 className="font-bold text-black text-4xl sm:text-5xl leading-tight">
                Let's Create<br />
                Memorable<br />
                Journey
              </h1>
              <div className="w-32 sm:w-40 h-2 bg-[#97d9c8] rounded-full mt-4"></div>
            </div>
            <p className="font-medium text-[#000000bf] text-lg sm:text-xl leading-relaxed max-w-md">
              Explore the breathtaking landscapes of North India. From snow-capped Himalayan peaks to peaceful hill stations, we craft personalized experiences that bring you closer to nature, culture, and yourself.
            </p>
          </div>

          {/* Images */}
          <div className="mb-8">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <img className="w-full h-48 sm:h-56 object-cover rounded-lg shadow-lg" alt="kedarnath" src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop" />
              <img className="w-full h-48 sm:h-56 object-cover rounded-lg shadow-lg" alt="jaipur fort" src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&h=300&fit=crop" />
            </div>
            <img className="w-full h-48 sm:h-56 object-cover rounded-lg shadow-lg" alt="hawa mahal" src="https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&h=300&fit=crop" />
          </div>

          <BookingCard />
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block relative w-full h-screen">
          <div className="absolute w-[1063px] h-[861px] top-[195px] left-[121px]">
            <img className="absolute w-[305px] h-[427px] top-0 left-[758px] object-cover rounded-lg shadow-xl" alt="kedarnath" src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=500&fit=crop" />
            <div className="absolute w-[1063px] h-[746px] top-[115px] left-0">
              <div className="absolute w-[1063px] h-[402px] top-[344px] left-0">
                <img className="absolute w-[305px] h-[399px] top-0 left-[758px] object-cover rounded-lg shadow-xl" alt="jaipur fort" src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&h=500&fit=crop" />
                <div className="absolute top-[250px] left-0 w-[796px] h-[152px]">
                  <BookingCard isDesktop />
                </div>
              </div>

              <div className="w-[606px] top-[452px] left-0 font-medium text-[#000000bf] text-2xl leading-[32.9px] absolute">
                Explore the breathtaking landscapes of North India. From snow-capped Himalayan peaks to peaceful hill stations, we craft personalized experiences that bring you closer to nature, culture, and yourself.
              </div>

              <div className="absolute w-[586px] h-[411px] top-0 left-0">
                <div className="relative w-[584px] h-[411px]">
                  <div className="absolute w-[584px] top-0 left-0 font-bold text-black text-[100px] leading-[113.2px]">
                    Let's Create Memorable <br /> Journey
                  </div>
                  <div className="absolute w-[215px] h-2 top-[111px] left-1.5 bg-[#97d9c8] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute w-[409px] h-[823px] top-[105px] left-[1214px]">
            <img className="absolute w-[409px] h-[612px] top-[211px] left-0 object-cover rounded-lg shadow-xl" alt="Hawa Mahal" src="https://images.unsplash.com/photo-1477587458883-47145ed94245?w=500&h=700&fit=crop" />
            <div className="absolute w-[251px] h-[211px] top-0 left-[97px]">
              <svg className="w-full h-full" viewBox="0 0 251 211" fill="none">
                <path d="M125.5 0L251 211H0L125.5 0Z" fill="#97d9c8" fillOpacity="0.1" />
              </svg>
            </div>
          </div>
        </div>
      </div>

  );
}

export default Landing;