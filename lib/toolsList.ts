export type Tool = {
  slug: string;
  title: string;
  description: string;
  items: [string, string];
  calculate: (value: string) => string;
};

export const tools: Tool[] = [
  {
    slug: "celsius-to-fahrenheit",
    title: "Celsius To Fahrenheit",
    description:
      "This tool allows you to convert temperatures from Celsius (°C) — the metric unit commonly used worldwide — to Fahrenheit (°F), the temperature scale primarily used in the United States.",
    calculate: (celsius: string) =>
      ((parseFloat(celsius) * 9) / 5 + 32).toString(),
    items: ["Celsius", "Fahrenheit"],
  },
  {
    slug: "fahrenheit-to-celsius",
    title: "Fahrenheit To Celsius",
    description:
      "Use this tool to convert temperatures from Fahrenheit (°F) to Celsius (°C).",
    calculate: (fahrenheit: string) =>
      (((parseFloat(fahrenheit) - 32) * 5) / 9).toString(),
    items: ["Fahrenheit", "Celsius"],
  },
  {
    slug: "kilometers-to-miles",
    title: "Kilometers To Miles",
    description:
      "Convert distances measured in kilometers to miles.",
    calculate: (km: string) =>
      (parseFloat(km) * 0.621371).toString(),
    items: ["Kilometers", "Miles"],
  },
  {
    slug: "miles-to-kilometers",
    title: "Miles To Kilometers",
    description:
      "Convert distances measured in miles to kilometers.",
    calculate: (miles: string) =>
      (parseFloat(miles) / 0.621371).toString(),
    items: ["Miles", "Kilometers"],
  },
  {
    slug: "kilograms-to-pounds",
    title: "Kilograms To Pounds",
    description:
      "Convert weights from kilograms to pounds.",
    calculate: (kg: string) =>
      (parseFloat(kg) * 2.20462).toString(),
    items: ["Kilograms", "Pounds"],
  },
  {
    slug: "pounds-to-kilograms",
    title: "Pounds To Kilograms",
    description:
      "Convert weights from pounds to kilograms.",
    calculate: (lbs: string) =>
      (parseFloat(lbs) / 2.20462).toString(),
    items: ["Pounds", "Kilograms"],
  },
  {
    slug: "liters-to-cups",
    title: "Liters To Cups",
    description:
      "Convert liquid volumes from liters to US cups.",
    calculate: (liters: string) =>
      (parseFloat(liters) * 4.22675).toString(),
    items: ["Liters", "Cups"],
  },
  {
    slug: "cups-to-liters",
    title: "Cups To Liters",
    description:
      "Convert US cups to liters.",
    calculate: (cups: string) =>
      (parseFloat(cups) / 4.22675).toString(),
    items: ["Cups", "Liters"],
  },
  {
    slug: "inches-to-centimeters",
    title: "Inches To Centimeters",
    description:
      "Convert inches to centimeters.",
    calculate: (inches: string) =>
      (parseFloat(inches) * 2.54).toString(),
    items: ["Inches", "Centimeters"],
  },
  {
    slug: "centimeters-to-inches",
    title: "Centimeters To Inches",
    description:
      "Convert centimeters to inches.",
    calculate: (cm: string) =>
      (parseFloat(cm) / 2.54).toString(),
    items: ["Centimeters", "Inches"],
  },
  {
    slug: "seconds-to-minutes",
    title: "Seconds To Minutes",
    description:
      "Convert seconds to minutes.",
    calculate: (seconds: string) =>
      (parseFloat(seconds) / 60).toString(),
    items: ["Seconds", "Minutes"],
  },
  {
    slug: "minutes-to-seconds",
    title: "Minutes To Seconds",
    description:
      "Convert minutes to seconds.",
    calculate: (minutes: string) =>
      (parseFloat(minutes) * 60).toString(),
    items: ["Minutes", "Seconds"],
  },
  {
    slug: "hours-to-days",
    title: "Hours To Days",
    description:
      "Convert hours to days.",
    calculate: (hours: string) =>
      (parseFloat(hours) / 24).toString(),
    items: ["Hours", "Days"],
  },
  {
    slug: "days-to-hours",
    title: "Days To Hours",
    description:
      "Convert days to hours.",
    calculate: (days: string) =>
      (parseFloat(days) * 24).toString(),
    items: ["Days", "Hours"],
  },
  {
    slug: "meters-to-feet",
    title: "Meters To Feet",
    description:
      "Convert meters to feet.",
    calculate: (meters: string) =>
      (parseFloat(meters) * 3.28084).toString(),
    items: ["Meters", "Feet"],
  },
  {
    slug: "feet-to-meters",
    title: "Feet To Meters",
    description:
      "Convert feet to meters.",
    calculate: (feet: string) =>
      (parseFloat(feet) / 3.28084).toString(),
    items: ["Feet", "Meters"],
  },
  {
    slug: "square-meters-to-square-feet",
    title: "Square Meters To Square Feet",
    description:
      "Convert square meters to square feet.",
    calculate: (sqm: string) =>
      (parseFloat(sqm) * 10.7639).toString(),
    items: ["Square Meters", "Square Feet"],
  },
  {
    slug: "square-feet-to-square-meters",
    title: "Square Feet To Square Meters",
    description:
      "Convert square feet to square meters.",
    calculate: (sqft: string) =>
      (parseFloat(sqft) / 10.7639).toString(),
    items: ["Square Feet", "Square Meters"],
  },
  {
    slug: "mb-to-gb",
    title: "Megabytes To Gigabytes",
    description:
      "Convert megabytes to gigabytes.",
    calculate: (mb: string) =>
      (parseFloat(mb) / 1024).toString(),
    items: ["Megabytes", "Gigabytes"],
  },
  {
    slug: "gb-to-mb",
    title: "Gigabytes To Megabytes",
    description:
      "Convert gigabytes to megabytes.",
    calculate: (gb: string) =>
      (parseFloat(gb) * 1024).toString(),
    items: ["Gigabytes", "Megabytes"],
  },
  {
    slug: "newton-to-pound-force",
    title: "Newton To Pound Force",
    description:
      "Convert newtons to pound-force.",
    calculate: (newton: string) =>
      (parseFloat(newton) * 0.224809).toString(),
    items: ["Newton", "Pound Force"],
  },
  {
    slug: "pound-force-to-newton",
    title: "Pound Force To Newton",
    description:
      "Convert pound-force to newtons.",
    calculate: (lbf: string) =>
      (parseFloat(lbf) / 0.224809).toString(),
    items: ["Pound Force", "Newton"],
  },
  {
    slug: "rpm-to-radians-per-second",
    title: "RPM To Radians Per Second",
    description:
      "Convert RPM to radians per second.",
    calculate: (rpm: string) =>
      (parseFloat(rpm) * 0.10472).toString(),
    items: ["RPM", "Radians/Second"],
  },
  {
    slug: "watts-to-horsepower",
    title: "Watts To Horsepower",
    description:
      "Convert watts to horsepower.",
    calculate: (watts: string) =>
      (parseFloat(watts) * 0.00134102).toString(),
    items: ["Watts", "Horsepower"],
  },
];
