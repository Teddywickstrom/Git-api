# Feathers-API

> A Feathers.js generated API 2017-04-26

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/Feathers-API; npm install
    ```

3. Start your app

    ```
    npm start
    ```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.
// We have not used these functions

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g feathers-cli             # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers generate model                 # Generate a new Model
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).

## SchemaModels -CRUD Schemas // Examples of the HTTP requests structure for the different #routes
# Routes 
{
    "title": "Ålands wow vilket ställe, tillbaka igen" ,
    "creatorId": "59086e45845aa927b4540f14",
    "walkersId":"59086e45845aa927b4540f14",
    "coords": [[23,34],[13,37],[13,38],[13,39]],
    "time": "5h",
    "score":[
    	{"userId":"59086e45845aa927b4540f14",
    	"score": 5} 
    	],
    "comments":[
    	{"userId" : "59086e45845aa927b4540f14", "comment":"hej vilken kul rutt och guuu vad åland är fint såhär års!!!!;D","date":"2017-05-04 15:26:33.856Z"}
    	],
    "checkpoints":["59106db275ad38fa0105be62"],
    "distance":7
   
  }
  
  # Users
  
{
    "username": "EnNyUser7" ,
    "email": "Email7@email.com" ,
    "password":"EnNyUser",
    "friends":["59086e45845aa927b4540f14","590b0067cd891e21605fcb95"],
    "routes":[                                                                              //Skall vara unik, kan gå samma rutt olika tidpunkter
        {"routeId":"5900bc293cd85213b4bb0268","walked_date": "2017-05-04 15:26:33.856Z"
        },
        {"routeId":"5900bc293cd85213b4bb0268","walked_date": "2017-05-08 15:26:33.856Z"
        }
    ]      

  }
  
  # Checkpoints
  
  {
    "name": "Tedzor!" ,
    "coord":[13,37],
    "type": "Water"                     // kan skapa egna typer! 
    

  }
  

## Changelog

__0.1.0__

- Initial release

## License

Copyright (c) 2016

Licensed under the [MIT license](LICENSE).
