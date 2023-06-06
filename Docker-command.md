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


  * ``` The ordr mater inde Dockerfile```

  * ```docker run -p <frontend_Port>:<backend_node_port> <image_name|ID> ```  in order o allow the incoming connection from the front end to specific port inside container 

  

   
