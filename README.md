# trivago cool magazine

This a React Js project made for the trivago case study challange

## Quick Start !⚡️

Install the packajes by running the below code
  ```sh
    $ npm i 
  ```
  Than you can start the project to see the magazine
```sh
    $ yarn start
 ```
 Also you can see all the project components by starting the storybook
 ```sh
    $ yarn storybook
 ```


## Project info 🤓

This repo is using the live magazine.trivago APIs
- The [fron page API](https://com.api.magazine.trv.cloud/wp-json/api/v1/frontpage_data)
- The [single post API](https://com.api.magazine.trv.cloud/wp-json/api/v1/post/)
  
## Docker 🐳
You can start building the docker by running
 ```sh
    $ docker-compose up -d —build
 ```
- The production magazine will be served in localhost:80 
- The test magazine will be server in localhost:3000
- The storybook will be served in localhost:9001