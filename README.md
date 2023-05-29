# Start

- pnpm install
- pnpm run start:dev

# Info

- Course: https://www.udemy.com/course/nestjs-microservices-build-deploy-a-scaleable-backend/

# Commands

- create monorepo: nest g library common
- docker:
  - cd apps/reservations
    - (specify path where to run from) docker build ../../ -f Dockerfile -t learn-nestjs-microservices
    - docker run learn-nestjs-microservices
  - cd ../..
    - docker-compose up
