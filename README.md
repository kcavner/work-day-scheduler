# Daily Planer
<img src="Assets\screenshot.JPG">



## Description
- This is a work day scheduler i created in javscript html and css. It shows 9am through 5pm on the left and allows the user to save events to do for the day.
## Details
- The work day scheduler shows the current date at the top and makes the input fields green for future events, red for current time, and grey for past events. Upon clicking the save button of the events row, the input field is saved to local storage and is able to be accessed upon re loading or leaving the page. Clicking clear schedule wipes out the local storage thus removing all input in input fields.

## What it solves
- The work day scheduler allows you to plan your work day and lets you know ahead of time coming events. Vurrent and past events as well. 
## What i learned
- I learned how to use jquery and dayjs to make the javascript creation easier for myself. I used day js to compare the formatted time to the time attribute of the rows. This comparison allowed for the conditional colors. I learned that saving to the local storage is made easier with the .text function from jquery as well.

## Deployment Link
https://kcavner.github.io/work-day-scheduler/

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)