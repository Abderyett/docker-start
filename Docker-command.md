  ## Docker
  
  * ```Docker run <container-name> ``` ---> `This command combine <create + start>`

  * ```docker ps``` ==> to show runing container

  * ```docker ps --all``` ==>to display all existing container inside  docker VM

  * ```docker system prune``` ==> to delete all conatiners

  * ```docker logs <container ID>```==> to show logs of program inside container  like  (docker run       busybox ping google.com) 

  * ```docker stop <ID> ```  it give time to shutdown after 10s if it didn't respond docker execute docker kill

  * ```docker kill <ID>``` to stop runing container immediatly

  * ``` docker exec -it <ID> <command> ``` to run commande inside running container/ -it allow to provide input to container exp ```docker exec -it a2335796d9c2 redis-cli```


  * ```docker exec -it <ID> sh  ``` to access shell inside container

  * ``` docker run -it <image> sh``` to start new container with shell as primary processs (webserver) and maybe attach to it runing shell ```exec command```


  * ```docker build -t abderyett/imageName:latest .``` to tag an image instead of working with id when run the image (by convention  -t docker_id/project_name:version)


  * ``` The order mater inde Dockerfile```

  * ```docker run -p <frontend_Port>:<backend_node_port> <image_name|ID> ```  in order o allow the incoming connection from the front end to specific port inside container 


  * We use docker compose to setup connection between contqiners and skipping typing long command in docker CLI

  * ``` docker-compose up ``` ==> docker run myimage

  * ``` docker-compose up --build``` ==> (docker build . + docker run myimage)

  * ``` docker-compose up -d ``` ==> docker run containers in background

  * ``` docker-compose down ``` ==> docker  to stop all runing containers 


  ```==========================================================================================```

 There is four diffrent restat policies for docker compose



|   |   |
|---|---|
|"no"|never attemp to restart this contqiner if it carshs or stops |
| always  | if this container *stop for no reason* always attemp to restart it   |
| on-failure  | Only restart  if container stops with an error code   |
| unless-stopped   | always restart unless we (developers) forcibly stops it  |


* when we are working on we will work with Dockerfile.dev to specify to docker build file name we use for exemple: 

``` docker build -f Dockerfile.dev .  ```


```docker build -p 5173:5173 -v /app/node_modules -v $(pwd):/app <image id> .``` => we remplace this command with volume in docker-compose

we are telling docker top map all the app folder by using (:/), we used /app/node_modules/ to tell docker that folder stay in stone don't mess with it don't try to map it up with nothin else




   
