# MySneakers
E-commerce application.
## Windows installation
### Prerequisites
- npm
### Installation
Clone the project :
```
git clone https://github.com/dylanramos/MySneakers.git
```
Install MongoDB Community Server : 
https://www.mongodb.com/try/download/community

Use default settings when installing.
>**Important** : don't skip MongoDB Compass installation.
### Start database server
Go to the MongoDB **installation directory**.

Create a folder named **db**.

Run a command line **as an administrator** and run the following line :
```
MongoDB\Server\4.4\bin\mongod.exe --dbpath="MongoDB\db"
```
### Insert data onto the server
Open **MongoDBCompass**.

Click on **New Connection**.

Add the following line and click on **Connect** :
```
mongodb://127.0.0.1:27017
```
Click on **Create Database**

Add the following lines :

Database Name : **mysneakers**

Collection Name : **products**

After that, click on the created database (mysneakers) and then on **products**. Next click on **Import Data** and browse **products.json** in the **testdata folder of the git project**. Then click on **Import**
### Install application packages
Go to the cloned project folder and run the following command :
```
npm i
```
### Start the application
Go to the cloned project folder and run the following command :
```
npm run server-start
```
>**Important** : Do not close this terminal

Now, open another terminal and run the following command :
```
npm run build
```
Then, run the following command :
```
npm run serve
```
>**Important** : Do not close this terminal
### Access to the application
Open a web browser and type the following :
```
http://localhost:8080/
```