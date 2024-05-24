# Neroshitron
![image](https://github.com/D4M13N-D3V/neroshitron/assets/13697702/e4a9e11b-0e52-42e0-ad9a-821a81e92e90)


## Development
### Documentation For Initial Project Setup
- https://nextjs.org/docs
- https://appwrite.io/docs
### Running With Docker
1) Open your terminal and navigate to the root of the git repository.
2) Make sure that docker and docker compose are installed.
3) Run `docker-compose --env-file ./docker.env up` which will start up OwnCast, AppWrite, and the UI.

#### OwnCast 
http://localhost:8080/
Configuration is done through the Owncast administration page located on your server under /admin. The login username is admin and the password is your stream key, the default being abc123.


#### AppWrite 
http://localhost:80/
You will need to register and sign up, the first account on the appwrite instance will be the admin account.çConfiguration is done through the Owncast administration page located on your server under /admin. The login username is admin and the password is your stream key, the default being abc123.

#### UI 
http://localhost:3000

### Running Without Docker
1) Open your terminal and navigate to the root folder of the git repository. 
2) Run the command `npm update`. 
3) Once the depedencies are pulled and installed you can run the command `npm run dev` to run the application in development mode.
4) Open http://localhost:3000/
