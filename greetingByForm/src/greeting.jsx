function greeting() {
  const time = new Date().getHours();
  if (time >= 1 && time < 12) {
    return "Good Morning !!!";
  }
  if (time >= 12 && time < 19) {
    return "Good Afternoon !!!";
  }
  if (time >= 19 && time < 24) {
    return "Good Night !!!";
  }
}

export default greeting;
