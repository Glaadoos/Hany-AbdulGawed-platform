# Related Codes Process Docs

> @ September 8th 2024 by [BaHGet](https://github.com/BaHGet)

> [!IMPORTANT]
> you should have the netlify local dev server up & running  

## How To create a Code for a branch

### generateCodes function

> responsable for makeing a specific `numberOfCodes` with a specific `lengthOfCode`

```js

const generateCodes = (numberOfCodes, lengthOfCode) => {
  let codes = [];
  const str =
    "ABCDEFGHJKLMNOPQRSTUVWXYZ" +
    "abcdefghijkmnopqrstuvwxyz0123456789@#$%&";

  for (let i = 1; i <= numberOfCodes; i++) {
    let code = "";
    for (let j = 1; j <= lengthOfCode; j++) {
        let char = Math.floor(Math.random() * str.length + 1);
        if (str.charAt(char).toString() == "")
        char = Math.floor(Math.random() * str.length + 1);
        code += str.charAt(char).toString();
    }
    codes.push(code);
  }
  return codes;
};
```

### addCodes function

> responsable for createing a specific `numberOfLessons` and publish to DB

```js

const addCodes = async (numberOfLessons) => {
  for (let i = 0; i < numberOfLessons; i++) {
    const order = "calculus" + ( i+1 < 10 ? `0${i+1}` : `${i+1}`);
    const code = {
      order: order,
      code: generateCodes(60, 8),
    };
    const res = await fetch(BASE_URL, {
      method: "POST",
      body: JSON.stringify(code),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await res.json();
    console.log(result);
  }
}
```

## How To delete a Code for a branch

### delete code by it's order

just call `/.netlify/functions/api/branch-name/` with `DELETE` method and insert order in query

### delete all codes

just call `/.netlify/functions/api/branch-name/deleteAll` with `DELETE` method
