### if you need ignore your falsy value from your expression you can use this little package
# install
[link](https://www.npmjs.com/package/check-if-falsy-except-value)

```
npm i check-if-falsy-except-value
```
# usage
scenario, we have to make sure that data is true;

```
if(!!data) {
  // ...
}
```

yes it is work but we need to use 0 or another falsy value;

```
if(toBool(data, 0)) {
  // ...
}

```

it is the all feature this package