FROM openjdk:11-jdk-slim
COPY "./target/tiendalostiburones-0.0.1.war" "app.war"
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.war"]