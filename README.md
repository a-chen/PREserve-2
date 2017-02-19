## PREserve 2.0

#### Run instructions
1. make sure mongo database is running
2. start all Spring boot applications from their respective src/main/java/moduleName.java
3. go to http://localhost:9001

**Endpoints are routed by Zuul gateway in PREserve module**

PREserve client/gateway is on http://localhost:9001

customer is on http://localhost:9002

Zuul maps customerService to http://localhost:9002

so going to http://localhost:9001/customerService/customer

is the same as http://localhost:9002/customer

Upon index.html load, angular makes a ajax call to http://localhost:9001/customerService/customer