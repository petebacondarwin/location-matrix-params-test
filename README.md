## Steps

```
yarn
yarn start
```

You can change the mode from normal HTML5 mode to Matrix mode by adding the `?matrix` query param.

E.g.

 * Normal mode: http://localhost:8080
 * Matrix mode: http://localhost:8080?matrix

In matrix mode the "bad" URL does not get modified by `$location`.

E.g.

* http://localhost:3000/a;x=1/b;y=2/c?matrix