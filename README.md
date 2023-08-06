## About
I was asked to use the free `openuv` API to get UV Index data and display it however I wanted on the UI. To save time, I used an app I'd built the previous day as boilerplate (this was allowed), and hard-coded lat/long for Chicago (also allowed). Since then, I have created a separate branch where the user can enter their own city/state (I used the `api-ninjas` API to get lat/long data based on city/state provided)

As a bonus, I used these pre-defined colors I was given to represent UV Index Risk Levels:
```
{
  LOW = "#558B2F",
  MODERATE = "#F9A825",
  HIGH = "#EF6C00",
  VERY_HIGH = "#B71C1C",
  EXTREME = "#6A1B9A" 
}
```

## View
Deployed at https://amber-sample.vercel.app/. 

Everything BEFORE [the add-search PR](https://github.com/the-amber-joy/amber-sample/pull/1) is what I built/submitted during the interview.

## Important Note
My API key for openuv is limited to 50 calls per day, so this won't work if it gets used a lot! I'm probably going to change over to my openweathermap API key instead since it allows 1000 calls per day.
