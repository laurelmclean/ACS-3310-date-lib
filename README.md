# Dately - Date Formatting and Comparison Utility

Dately is a JavaScript class that provides a versatile and user-friendly way to work with dates, offering functions to format dates in various ways and determine their relation to the present time. This utility aims to simplify date manipulation and formatting tasks, making it easier for developers to work with dates in their applications.

## Features

1. **Date Formatting:** Dately allows you to easily format dates according to your desired mask, providing flexibility in how dates are presented.

2. **Relative Time:** The `when()` method enables you to quickly determine how long ago or from now a given date is.

## Usage

1. **Installation:**
   Copy and paste the Dately class into your JavaScript project.

2. **Creating a Dately Instance:**
   To work with a specific date, create a new Dately instance by providing a date string or date components as constructor arguments.

   ```javascript
   const myDate = new Dately('2023-08-15');
   ```

3. **Accessing Date Components:**
   Access various date components using getter methods.

   ```javascript
   console.log(myDate.year);   // 2023
   console.log(myDate.month);  // August
   console.log(myDate.date);   // 15
   ```

4. **Formatting Dates:**
   Use the `format()` method to format the date according to a given mask. Available placeholders include:
   - `Y`: Full year (e.g., 2023)
   - `y`: Year without century (e.g., 23)
   - `M`: Full month name (e.g., August)
   - `m`: Abbreviated month name (e.g., Aug)
   - `D`: Zero-padded day (e.g., 03)
   - `d`: Day without padding (e.g., 3)
   - `#`: Day ordinal (e.g., 15th)
   - `L`: Full day name (e.g., Sunday)
   - `l`: Abbreviated day name (e.g., Sun)
   - `H`: Zero-padded hours (e.g., 08)
   - `h`: Hours without padding (e.g., 8)
   - `I`: Zero-padded minutes (e.g., 05)
   - `i`: Minutes without padding (e.g., 5)
   - `S`: Zero-padded seconds (e.g., 09)
   - `s`: Seconds without padding (e.g., 9)

   ```javascript
   const formattedDate = myDate.format('L, M D, Y');  // Sunday, August 15, 2023
   ```

5. **Relative Time:**
   Use the `when()` method to determine how long ago or from now a date is.

   ```javascript
   const relativeTime = myDate.when();  // e.g., 2 days ago
   ```

## Examples

```javascript
const currentDate = new Dately();
console.log(currentDate.format('Y-m-d'));  // 2023-08-30

const futureDate = new Dately('2023-12-25');
console.log(futureDate.when());  // 3 months from now
```