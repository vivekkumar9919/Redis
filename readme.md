# Redis Learning Project

This repository is designed to help you learn Redis, covering the basics, streams, pub/sub, and geospatial data. 

## Project Setup

To set up the project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/vivekkumar9919/Redis
   cd Redis
2. **Run Docker**: Make sure you have Docker and Docker Compose installed on your machine. To run the Redis server using Docker, execute the following command:
   ```bash
   docker-compose up
   ```
3. **Install Packages**: After starting the Docker container, install the required npm packages:
   ```bash
   npm install
   ```   


# 🌟 Redis Overview
 
## 📚 Basics of Redis
Redis is an open-source, in-memory data structure store that can be used as a database, cache, and message broker. It supports various data structures such as strings, hashes, lists, sets, and more.

## 🎉 Advantages of Redis
- **High Performance:** Redis is known for its speed, capable of handling millions of requests per second for read and write operations.
- **In-Memory Storage:** Data is stored in memory, allowing for very low latency and high throughput.
- **Data Structures:** Supports a wide variety of data types, making it flexible for different use cases.
- **Persistence:** Offers various persistence mechanisms (RDB snapshots, AOF) to save data on disk.
- **Replication and High Availability:** Supports master-slave replication and Redis Sentinel for high availability.

## 🏢 Applications of Redis
- **Caching:** Frequently accessed data can be cached in Redis to speed up application performance.
- **Session Store:** Redis can be used to store user sessions in web applications.
- **Real-Time Analytics:** Analyze data in real time with Redis' in-memory capabilities.
- **Message Broker:** Utilize Redis pub/sub features for messaging between services.
- **Geospatial Applications:** Store and query geographical data efficiently.

## 📈 Redis Streams
Redis Streams is a powerful data type that allows you to create time-series data and manage logs. It enables you to:
- Create a stream of messages.
- Consume messages from the stream using consumer groups.
- Retain messages for a specified duration.

### 🛠 Basic Commands
- **XADD:** Add a new entry to a stream.
- **XREAD:** Read entries from a stream.
- **XGROUP:** Manage consumer groups.

## 📡 Redis Pub/Sub
Pub/Sub is a messaging paradigm that allows for asynchronous communication between services. In Redis, it allows clients to publish messages to channels and subscribers to receive messages from those channels.

### 🔑 Basic Commands
- **PUBLISH:** Send a message to a channel.
- **SUBSCRIBE:** Subscribe to a channel to receive messages.
- **UNSUBSCRIBE:** Unsubscribe from a channel.

## ⚖️ Difference Between Streams and Pub/Sub

| Feature                | Redis Streams                          | Pub/Sub                             |
|-----------------------|---------------------------------------|------------------------------------|
| Message Retention      | Messages are stored for later consumption | Messages are not stored; only delivered to active subscribers |
| Consumer Groups        | Supports multiple consumers sharing the load | Does not support consumer groups   |
| Message Acknowledgment | Consumers can acknowledge messages    | No acknowledgment mechanism        |
| Use Case              | Use for logging, data streaming      | Use for real-time notifications    |

## 🌍 Redis Geospatial
Redis provides geospatial indexing and querying capabilities. It allows you to store and retrieve geographic data efficiently.

### 📏 Basic Commands
- **GEOADD:** Add geospatial items to a geospatial index.
- **GEORADIUS:** Query items within a specified radius of a point.
- **GEODIST:** Calculate the distance between two members.

---

### 🔗 Useful Links
- [Redis Official Website](https://redis.io)
- [Redis Documentation](https://redis.io/documentation)
