import Vue from "vue";
import { distanceInWordsToNow } from "date-fns";

Vue.filter("timeSince", timestamp => {
  const time = Number(timestamp) * 1000;
  return distanceInWordsToNow(time);
});

Vue.filter("capitalize", value => {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});
