
# Book Nook

A React Native application using Goodreads api built with Golang using [GQLGen](https://github.com/99designs/gqlgen), Typescript and Expo



## Running backend

You will need a `.env` file in the backend directory and a Goodreas api key. The file content should look something like this:

```
API_KEY=<your goodreads developer api key>
```

Then run 
```
go run ./server/server.go
```


## Deploy backend to Heroku

https://medium.com/@shalandy/deploy-git-subdirectory-to-heroku-ea05e95fce1f

```bash
git subtree push --prefix backend heroku master
```


