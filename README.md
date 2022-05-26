# gRPC / Node Course (Udemy) - Typescript + gRPC Web

This repo was made following the course [gRPC [Node.js] MasterClass: Build Modern API & Microservices](https://www.udemy.com/course/grpc-nodejs/).

In addition, I've used Typescript and I've added an example of gRPC Web in the Calculator Service. To run it:

```bash
npm run calculator:server # Launch the server
```

In another terminal:

```bash
npm run calculator:proxy # Launch the Envoy Proxy (for gRPC Web)
```

In another terminal:

```bash
npm run calculator:web # Launch the front-end (with Parcel)
```
