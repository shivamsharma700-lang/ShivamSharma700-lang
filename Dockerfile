FROM maven:3.9.10-eclipse-temurin-21 AS backend-build
WORKDIR /app
COPY pom.xml ./
COPY backend ./backend
RUN mvn -q -pl backend -am package -DskipTests
FROM eclipse-temurin:21-jre
WORKDIR /app
COPY --from=backend-build /app/backend/target/backend-*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app/app.jar"]
