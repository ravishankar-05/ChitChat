export function formatMessageTime(date, timeZone = "UTC") {
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
      return ""; // Handle invalid dates gracefully
    }
    return new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false, // Use false for 24-hour format
      timeZone, // Specify timezone
    }).format(parsedDate);
  }
  