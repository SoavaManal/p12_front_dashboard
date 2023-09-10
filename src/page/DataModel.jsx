export default class DataModel {
  static transformScore(data) {
    const scoreValue = data;
    const scoreOff = 1 - scoreValue;
    return { scoreValue, scoreOff };
  }
  static transformActivity(data) {
    return data.map((item) => {
      const date = item.day;
      const last = date.length - 1;
      const day =
        date[last - 1] == 0 ? date[last] : date[last - 1] + date[last];
      const kilogram = item.kilogram;
      const calories = item.calories;
      return { day, kilogram, calories };
    });
  }
  static transformAverage(data) {
    return data.map((item) => {
      const dayofweek = ["L", "M", "M", "J", "V", "S", "D"];
      const day = item.day;
      const dayTransform = dayofweek[day - 1];
      const sessions = item.sessionLength;
      return { dayTransform, sessions };
    });
  }
  static transformPerformance(data) {
    return data.data.map((item) => {
      const kindlabel = data.kind;
      const kindNumber = item.kind;
      const kindTransform = kindlabel[kindNumber];
      const value = item.value;
      return { value, kindTransform };
    });
  }
}
