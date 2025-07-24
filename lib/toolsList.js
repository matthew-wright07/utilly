export const tools = [
  {
    slug: "celsius-to-fahrenheit",
    title: "Celsius To Fahrenheit",
    description:
      "This tool allows you to convert temperatures from Celsius (°C) — the metric unit commonly used worldwide — to Fahrenheit (°F), the temperature scale primarily used in the United States. Whether you’re cooking, checking the weather, or working with scientific data, this converter instantly provides an accurate Fahrenheit equivalent for any Celsius input, making it easier to understand temperatures in a familiar scale.",
    calculate: (celsius) => (parseFloat(celsius) * 9/5) + 32,
    items: ["Celsius", "Fahrenheit"]
  },
  {
    slug: "fahrenheit-to-celsius",
    title: "Fahrenheit To Celsius",
    description:
      "Try out our Fahrenheit to Celsius converter for free. This converter changes your inputed Farenheit measurement to a Celsius measurment. Why would you want to change from Fahrenheit to Celsius? The short answer is that by converting Fahrenheit to Celsius you are using the most widely reconized standard of measurement for temperature. How to convert Fahrenheit to Celsius? To convert Fahrenheit to Celsius you must first subract 32 from the original Fahrenheit temperature then you must multiply that number by 5/9 like so (f-32) x 5/9 = c. If you liked this Fahrenheit to Celsius converter please feel free to check out the rest of our free tools in the links below.",
    calculate: (fahrenheit) => (parseFloat(fahrenheit) - 32) * 5/9,
    items: ["Fahrenheit", "Celsius"]
  },
  {
    slug: "kilometers-to-miles",
    title: "Kilometers To Miles",
    description:
      "Convert distances measured in kilometers to miles with this tool. Kilometers are part of the metric system and used globally, while miles are primarily used in the United States and the UK. This conversion is helpful for travelers, runners, drivers, or anyone who needs to understand distances between the two measurement systems quickly and accurately.",
    calculate: (km) => parseFloat(km) * 0.621371,
    items: ["Kilometers", "Miles"]
  },
  {
    slug: "miles-to-kilometers",
    title: "Miles To Kilometers",
    description:
      "This tool converts miles, the imperial unit of distance mainly used in the US and the UK, into kilometers, the standard metric unit used worldwide. Whether you’re planning a trip abroad, reading international maps, or tracking athletic performance, this converter provides a fast and precise way to translate distances between miles and kilometers.",
    calculate: (miles) => parseFloat(miles) / 0.621371,
    items: ["Miles", "Kilometers"]
  },
  {
    slug: "kilograms-to-pounds",
    title: "Kilograms To Pounds",
    description:
      "Easily convert weights from kilograms (kg), the base unit of mass in the metric system, to pounds (lbs), the unit commonly used in the US and UK. This converter is useful for everyday applications such as weighing yourself, measuring ingredients, shipping goods, or understanding weight-related information when dealing with different measurement systems.",
    calculate: (kg) => parseFloat(kg) * 2.20462,
    items: ["Kilograms", "Pounds"]
  },
  {
    slug: "pounds-to-kilograms",
    title: "Pounds To Kilograms",
    description:
      "Convert weights from pounds (lbs), primarily used in the United States and the UK, into kilograms (kg), the internationally recognized metric unit. This tool is ideal for anyone who needs to interpret or convert weight measurements accurately across different systems, whether for health, shipping, or scientific purposes.",
    calculate: (lbs) => parseFloat(lbs) / 2.20462,
    items: ["Pounds", "Kilograms"]
  },
  {
    slug: "liters-to-cups",
    title: "Liters To Cups",
    description:
      "Convert liquid volumes from liters (L), a metric unit used globally for liquids and gases, into US customary cups. This is especially helpful for cooking, baking, or any scenario where you need to translate recipes or measurements between metric and US volume units to ensure accuracy and consistency in your results.",
    calculate: (liters) => parseFloat(liters) * 4.22675,
    items: ["Liters", "Cups"]
  },
  {
    slug: "cups-to-liters",
    title: "Cups To Liters",
    description:
      "Convert volumes from US customary cups, a common unit in cooking and beverage measurement, into liters (L), the standard metric unit for volume. This tool helps when you’re following international recipes, scaling ingredient quantities, or working with fluid volumes that require conversion between US and metric units.",
    calculate: (cups) => parseFloat(cups) / 4.22675,
    items: ["Cups", "Liters"]
  },
  {
    slug: "inches-to-centimeters",
    title: "Inches To Centimeters",
    description:
      "Convert lengths measured in inches, the imperial unit primarily used in the United States, to centimeters, the metric unit widely used around the world. This conversion is useful for tasks such as measuring height, furniture, or any length dimensions when switching between imperial and metric systems.",
    calculate: (inches) => parseFloat(inches) * 2.54,
    items: ["Inches", "Centimeters"]
  },
  {
    slug: "centimeters-to-inches",
    title: "Centimeters To Inches",
    description:
      "Translate lengths from centimeters (cm), the metric unit for length used worldwide, into inches, the imperial unit used mostly in the US. This converter is handy for interpreting measurements in areas such as tailoring, construction, or international shipping.",
    calculate: (cm) => parseFloat(cm) / 2.54,
    items: ["Centimeters", "Inches"]
  },
  {
    slug: "seconds-to-minutes",
    title: "Seconds To Minutes",
    description:
      "Convert time duration from seconds to minutes. Since one minute consists of 60 seconds, this tool helps you easily convert shorter time intervals into minutes for applications like timing workouts, cooking, or any activity that requires time measurement in different units.",
    calculate: (seconds) => parseFloat(seconds) / 60,
    items: ["Seconds", "Minutes"]
  },
  {
    slug: "minutes-to-seconds",
    title: "Minutes To Seconds",
    description:
      "Convert time measured in minutes into seconds by multiplying by 60. This conversion is valuable when working with detailed time measurements or when precise timing is essential, such as in sports, science experiments, or cooking.",
    calculate: (minutes) => parseFloat(minutes) * 60,
    items: ["Minutes", "Seconds"]
  },
  {
    slug: "hours-to-days",
    title: "Hours To Days",
    description:
      "Convert durations from hours to days, knowing that one day consists of 24 hours. This tool is useful for scheduling, planning projects, or converting longer periods of time into days for easier understanding and communication.",
    calculate: (hours) => parseFloat(hours) / 24,
    items: ["Hours", "Days"]
  },
  {
    slug: "days-to-hours",
    title: "Days To Hours",
    description:
      "Convert durations from days into hours by multiplying the number of days by 24. This conversion is helpful for detailed time management, project planning, or converting broad time spans into more precise units.",
    calculate: (days) => parseFloat(days) * 24,
    items: ["Days", "Hours"]
  },
  {
    slug: "meters-to-feet",
    title: "Meters To Feet",
    description:
      "Convert lengths measured in meters, the base unit of length in the metric system, into feet, the imperial unit commonly used in the United States and UK. This converter is handy for construction, real estate, sports, or any situation where you need to switch between metric and imperial length units.",
    calculate: (meters) => parseFloat(meters) * 3.28084,
    items: ["Meters", "Feet"]
  },
  {
    slug: "feet-to-meters",
    title: "Feet To Meters",
    description:
      "Translate lengths from feet, an imperial measurement unit primarily used in the US, to meters, the metric system’s base unit for length. This tool assists in converting measurements for international applications, engineering, and everyday measurements.",
    calculate: (feet) => parseFloat(feet) / 3.28084,
    items: ["Feet", "Meters"]
  },
  {
    slug: "square-meters-to-square-feet",
    title: "Square Meters To Square Feet",
    description:
      "Convert area measurements from square meters, the standard metric unit of area, to square feet, used mainly in the US and UK. This conversion is helpful in real estate, architecture, landscaping, and any project that requires understanding or communicating area sizes across different unit systems.",
    calculate: (sqm) => parseFloat(sqm) * 10.7639,
    items: ["Square Meters", "Square Feet"]
  },
  {
    slug: "square-feet-to-square-meters",
    title: "Square Feet To Square Meters",
    description:
      "Convert area measurements from square feet, an imperial unit commonly used in North America, to square meters, the international metric unit of area. This tool aids in comparing and converting floor plans, land plots, and other area measurements between unit systems.",
    calculate: (sqft) => parseFloat(sqft) / 10.7639,
    items: ["Square Feet", "Square Meters"]
  },
  {
    slug: "mb-to-gb",
    title: "Megabytes To Gigabytes",
    description:
      "Convert digital storage sizes from megabytes (MB) to gigabytes (GB), where 1 GB equals 1024 MB. This tool helps you understand file sizes, storage capacities, or data transfer amounts when scaling between these two commonly used units in computing and electronics.",
    calculate: (mb) => parseFloat(mb) / 1024,
    items: ["Megabytes", "Gigabytes"]
  },
  {
    slug: "gb-to-mb",
    title: "Gigabytes To Megabytes",
    description:
      "Convert digital storage measurements from gigabytes (GB) into megabytes (MB) by multiplying by 1024. This is useful when managing computer storage, file sizes, or data plans that require precision across different units.",
    calculate: (gb) => parseFloat(gb) * 1024,
    items: ["Gigabytes", "Megabytes"]
  },
  {
    slug: "newton-to-pound-force",
    title: "Newton To Pound Force",
    description:
      "Convert force units from newtons (N), the SI unit of force, to pound-force (lbf), used in the US customary system. This tool is valuable for engineering, physics, and mechanics to easily switch between metric and imperial force measurements.",
    calculate: (newton) => parseFloat(newton) * 0.224809,
    items: ["Newton", "Pound Force"]
  },
  {
    slug: "pound-force-to-newton",
    title: "Pound Force To Newton",
    description:
      "Convert force measurements from pound-force (lbf), used in imperial systems, to newtons (N), the metric SI unit of force. This conversion assists engineers, scientists, and students working across different measurement standards.",
    calculate: (lbf) => parseFloat(lbf) / 0.224809,
    items: ["Pound Force", "Newton"]
  },
  {
    slug: "rpm-to-radians-per-second",
    title: "RPM To Radians Per Second",
    description:
      "Convert rotational speed from revolutions per minute (RPM), commonly used in mechanical and automotive contexts, to radians per second, the SI unit for angular velocity. This tool helps engineers and physicists translate rotational speeds for analysis or design.",
    calculate: (rpm) => parseFloat(rpm) * 0.10472,
    items: ["RPM", "Radians/Second"]
  },
  {
    slug: "watts-to-horsepower",
    title: "Watts To Horsepower",
    description:
      "Convert power measurements from watts (W), the SI unit of power, to horsepower (hp), a unit commonly used to express engine power. This conversion is widely used in automotive, mechanical, and electrical engineering fields to understand and compare power outputs.",
    calculate: (watts) => parseFloat(watts) * 0.00134102,
    items: ["Watts", "Horsepower"]
  }
];
