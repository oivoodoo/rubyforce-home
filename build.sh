heroku apps:destroy --app $APP_NAME
heroku create $APP_NAME --buildpack https://github.com/oivoodoo/heroku-buildpack-nodejs-grunt.git
heroku config:set NODE_ENV=$NODE_ENV --app $APP_NAME
git push heroku master
