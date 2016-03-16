

# rss reader

a pretty swell rss reader

# requirements

homebrew (to install postgres)
postgresql (version??)
dogwater
hapi
react

# prepare a database

1. create a database called `rss_reader`
2. set user to 'william' and password is ''

# deploy

reference: https://github.com/babel/example-node-server

- source files are in /lib
- babel'd files are in /dist

## development

```
npm run dev
```

## production

```
npm run build
npm run serve
```

## learn log

TUES march 15
- created a new database in postgres
- created a new table in postgres (using pgAdmin3)
- setup `bookshelf` in hapi

WEDS march 16
- switched hapi back to ES5; turn off Babel `compiling`
- learned `bookshelf` tutorials. create new db, table, insert rows
- learned basics of sql commands, and mysql datatypes 
- create a schema in postgres. (POST: rssfeed {url: 'cool.com'})
- GET data from rssfeed table