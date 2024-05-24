# Neroshitron
![image](https://github.com/D4M13N-D3V/neroshitron/assets/13697702/87db1132-2191-425f-adfb-bde5601aea96 | height=150px)
![image](https://github.com/D4M13N-D3V/neroshitron/assets/13697702/583e1ddd-8304-4da1-a2f8-3492920b3cf7 | height=150px)
![image](https://github.com/D4M13N-D3V/neroshitron/assets/13697702/c10e43fc-543c-462b-ba71-15e38e4ad698 | height=150px)



## Development
### Documentation For Initial Project Setup
- https://nextjs.org/docs

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
