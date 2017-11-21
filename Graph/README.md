有两种算法可以对图进行遍历：

广度优先搜索(Breadth-First Search，BFS)

深度优先搜索(Depth-First Search，DFS)

图遍历可以用来寻找特定的顶点或寻找两个顶点之间的路径，检查图是否连通，检查图是否含有环等

在实现算法之前，让我们来更好地理解一下图遍历的思想方法。

图遍历算法的思想是必须追踪每个第一次访问的节点，并且追踪有哪些节点还没有被完全探 索。对于两种图遍历算法，都需要明确指出第一个被访问的顶点。

完全探索一个顶点要求我们查看该顶点的每一条边。对于每一条边所连接的没有被访问过的 顶点，将其标注为被发现的，并将其加进待访问顶点列表中。

为了保证算法的效率，务必访问每个顶点至多两次。连通图中每条边和顶点都会被访问到。

广度优先搜索算法和深度优先搜索算法基本上是相同的，只有一点不同，那就是待访问顶点 列表的数据结构。

- 深度优先搜索：桟，通过将顶点存入桟中，顶点是沿着路径被探索的，存在新的相邻顶点就去访问

- 广度优先搜索：队列，通过将顶点存入队列中，最先入队列的顶点先被探索

广度优先搜索算法会从指定的第一个顶点开始遍历图，先访问其所有的相邻点，就像一次访 问图的一层。简单说，就是先宽后深地访问顶点，如下图所示：

![](https://user-gold-cdn.xitu.io/2017/6/26/7757f24c4aa410a7474d0ec27796e6ec?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

维护两个队列，分别用于存储已读和待读顶点，两者具有互斥性，即某顶点在访问时只会属于一种类型，本质是通过不断递归将相邻的顶点进行访问和维度标为已读
