# Neroshitron
![image](https://github.com/D4M13N-D3V/neroshitron/assets/13697702/e4a9e11b-0e52-42e0-ad9a-821a81e92e90)
 ![image](https://github.com/D4M13N-D3V/neroshitron/assets/13697702/78e009be-caa0-4ae6-9c06-90dde2ab4389)


# Documentation For Technical Stack
- https://nextjs.org/docs
- https://supabase.com/docs/
- https://owncast.online/docs/
- https://docs.docker.com/engine/install/
  
# Running Backend
You will need docker installed.
- https://docs.docker.com/engine/install/

You will need supabase CLI.
- https://docs.docker.com/engine/install/

You need npm and nodejs installed. See documentation at start of document.
- https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

1) Open your terminal and navigate to the root of the git repository.
2) Make sure that docker and docker compose are installed.
3) Run `docker-compose --env-file ./docker.env up` which will start up OwnCast.
4) Run `supabase start`
5) Open your terminal and navigate to the root folder of the git repository. 
6) Run the command `npm update`. 
7) Once the depedencies are pulled and installed you can run the command `npm run dev` to run the application in development mode.
8) Open http://localhost:3000/



### Updating the database/Seeding data
Run `supabase db reset`. This will wipe data.
https://supabase.com/docs/guides/cli/local-development?queryGroups=access-method&access-method=kong#database-migrations

** Once the data is seeded you will need to go to the galleries bucket and add images to the folders that exist in it for the seeded galleries. **


## inbucket
http://localhost:54324su/monitor
This is where all mail being sent shows up from the application for developers.

## OwnCast 
http://localhost:8080/
Configuration is done through the Owncast administration page located on your server under /admin. The login username is admin and the password is your stream key, the default being abc123.

# User Flow Diagram
![image](https://github.com/D4M13N-D3V/neroshitron/assets/13697702/57379445-8bd5-4a7e-8a15-7fa0b3ae42dc)

# Database Diagram
![image](https://github.com/D4M13N-D3V/neroshitron/assets/13697702/b3387b77-d8c6-41c4-9fe8-d52dadb6bc5e)


