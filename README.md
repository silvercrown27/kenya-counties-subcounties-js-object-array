# kenya-counties-subcounties-js-object-array
An array of objects containing Kenya's counties and sub-counties. Javascript code

Certainly! Below is a simple README template for the provided data:

---

# Kenya Counties Data

This repository contains a JavaScript data structure representing counties and their respective sub-counties in Kenya.

## Overview

The data is organized as an array of objects, with each object representing a county. Each county object includes the following properties:

- `id`: Unique identifier for the county.
- `name`: Name of the county.
- `capital`: Capital city or town of the county.
- `subCounties`: An array containing the names of the sub-counties within the county.

## Data Source

The data is sourced from official administrative divisions in Kenya. It provides a structured representation of the geographical subdivisions within the country.

## Usage

Feel free to use this data in your JavaScript applications or projects that require information about counties in Kenya. The data is already structured for easy integration into your codebase.

## Example

Here is an example usage of the data:

```javascript
import countiesData from './countiesData';

// Accessing information for the first county
const firstCounty = countiesData[0];
console.log(firstCounty.name); // Output: Baringo
console.log(firstCounty.subCounties); // Output: ['Baringo Central', 'Baringo North', ...]

// Iterate through all counties
countiesData.forEach(county => {
  console.log(`County: ${county.name}, Capital: ${county.capital}`);
  console.log('Sub-Counties:', county.subCounties.join(', '));
  console.log('---');
});
```

## License

This data is provided under an [MIT License](LICENSE).
Feel free to customize the data according to your specific needs.

---

