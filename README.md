

# rss reader

a pretty swell rss reader

# requirements

homebrew (to install postgres)
postgresql (version??)
dogwater
hapi
react

# prepare a database

1. create a database called "rss-reader" (not sure what the sql command is since I used a gui pgAdmin3)
2. set user to 'william' and password is ''.

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
- learned how to use `bookshelf` by going through tutorials. namely to create a non-existent database, and insert rows. create a schema in postgres. (POST: rssfeed {url: 'cool.com'})
- GET this data from rssfeed table
