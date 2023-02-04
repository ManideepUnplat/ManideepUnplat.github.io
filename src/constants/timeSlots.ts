const getTimeSlots = () => {
  let tempTimeSlots = [];
  let d1 = new Date(new Date().getFullYear(), new Date().getDay());
  for (let i = 1; i <= 96; i++) {
    tempTimeSlots.push(
      d1.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      })
    );
    d1.setTime(d1.getTime() + 900000);
  }
  return tempTimeSlots;
};

export const timeSlots = getTimeSlots();
