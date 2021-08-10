/*
Promise 表示一个异步操作的最终结果，与之进行交互的方式主要是 then 方法，
该方法注册了两个回调函数，一个用于接收 promise 的终值  一个用于接收 promise不能执行的原(据因reason)。





Promise 的状态
一个 Promise 的当前状态必须为以下三种状态中的一种：等待态（Pending）、执行态（Fulfilled）和拒绝态（Rejected）。

等待态（Pending）
处于等待态时，promise 需满足：可以迁移至执行态或拒绝态

执行态（Fulfilled）
处于执行态时，promise 需满足：不能迁移至其他任何状态，必须拥有一个不可变的终值

拒绝态（Rejected）
处于拒绝态时，promise 需满足：不能迁移至其他任何状态，必须拥有一个不可变的据因





promise 还提供了 resolve，reject，all，race 的静态方法，为了方便链式调用！！！！ 待看


never类型是那些 总是会抛出异常或无法执行到终止点（例如无线循环）！！！待看


*/
