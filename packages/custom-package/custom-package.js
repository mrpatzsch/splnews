// Write your package code here!
Accounts.onCreateUser(function (options, user){
   user.profile = options.profile || {};
   //Twitter returns some useful info as the username and the picture
   if(user.services.twitter){
       user.profile.picture= user.services.twitter.profile_image_url_https;
       user.profile.username= user.services.twitter.screenName;
       user.profile.handle=user.services.twitter.handle
       user.profile.followers=user.services.twitter.followers
       console.log(user.profile.handle);
   }
   return user;
});