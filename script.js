//create a class for individual accounts
  //class should have constructor, that stores the email, password for the site, a list of passwords, and a function send email or notification when password needs to be updated (every 30-42 days)
  class Account{
    constructor(e,pass){
      this.email = e;
      this.password = pass;
      this.list = []; //empty array for list of passwords
      
    }
  }

//create a class for system of accounts

