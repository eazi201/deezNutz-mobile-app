import {  Account,Client,ID} from 'react-native-appwrite';

export const appwriteConfig={
    endpoint:'https://cloud.appwrite.io/v1',
    platform: 'com.deez.deezApp',
    projectId: '66cdec61003d1df250ab',
    storageId:'66cdf06100385ba8331a',
    databaseId:'66cded8d0029ddb646fa',
    usersCollectionId:'66cdeda8001940de040d',
    videosCollectionId:'66cdedc3000055ca7034',
    
};

const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId) 
    .setPlatform(appwriteConfig.platform) 
;

const account = new Account(client);

 export const createUser = () =>{
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });
}

