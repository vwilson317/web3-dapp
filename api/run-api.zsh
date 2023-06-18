#!/bin/bash

# Check if the container is built
if docker images -q api; then
  echo "Container is built already"
else
  echo "Container is not built"
  docker build -t api .
  echo "Container is built"
fi

# Check if the container is running
if docker ps -q --filter "name=<container_name>"; then
  echo "API: Container is running already"
else
  echo "Container is not running"
  docker run -d -p 3000 api
  echo "API Container is running port[3000]"
fi
