import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';

Accounts.validateNewUser((user) =>{
    console.log(JSON.stringify(user));
    const email = user.emails[0].address;
    
  new SimpleSchema ({
    email: {
      type: String,
      regEx: SimpleSchema.RegEx.Email
    }
  }).validate ({ email })

  return true
  });
