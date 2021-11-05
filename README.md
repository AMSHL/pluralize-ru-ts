# Pluralize ru ts

Creates a function than pluralize russian words

Install:

```
npm install ...
```

Usage example:

```javascript
const pluralizeMe = pluralize('год', 'года', 'лет');

pluralizeMe(0) // => лет
pluralizeMe(1) // => год
pluralizeMe(2) // => года
pluralizeMe(5) // => лет

const years = 34;
const string = `Привет, мне исполнилось ${years} ${pluralizeMe(years)}`;
//Привет, мне исполнилось 34 года
