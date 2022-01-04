# The Event Loop

JavaScript is single threaded. Which means that it can only run one command at a time.

We can avoid blocking the main thread by using Asynchronous JavaScript strategies and methods such as `callbacks` and `async await`.

If a task is initiated and the Event Loop is executing other methods on the call stack the task is placed in a que called the Task Queue, and stays there until all current call stack tasks are complete.

The Event loop 

The Event loop is responsible for checking the Task Queue after all tasks on the call stack have been completed. The Event Loop will pop a task from the task queue and push it onto the call stack, and then execute the commands required by said task.

Below are examples using of this process using the window's setTimeout method.

## setTimeout

This is a global window method that executes a function, after waiting a specified number of milliseconds.

`window.setTimeout(function, milliseconds)`

- The first parameter is a callback or a specific function to be executed.
- The second parameter indicates the time in milliseconds to delay the execution of the callback or function.

> **NOTE**: the `setTimeout` method can be called without using the `window.` notation.

### Examples

Consider the following code:

[event-loop-web-api.js](_code/event-loop-web-api.js ':include :type=code :fragment=demo')

The console output will be:

```shell
First

Third

Second
```

Even though setTimeout's delay is zero, it's placed on the task queue and scheduled to run at the next opportunity -- not immediately.

Tasks that are currently on the Call Stack must be executed and completed by the Event Loop before tasks in the task queue can be added to the Call Stack which can result in an execution order which may not be expected.

### Problem using Var

Consider the following for loop using setTimeout:

[event-loop-var-let.js](_code/event-loop-var-let.js ':include :type=code :fragment=bugVar')

You might expect the output to be:

```shell
0
1
2
3
```

However, the actual output is:

```shell
4
4
4
4
```

The reason is that for loop task iterates until it's exit condition is met. For the above for loop the exit condition is i = 4.

This problem is related to scope as the 4 instances of setTimeout that are put in task que shares the same exit conditional value of i.

When the loop task is complete it gets removed from the call stack. Then the 4 instances of setTimeout in the que are placed on the stack and are executed by the event loop, each logging the value of i in the console.  

Since the exit conditional is i = 4 each console.log(i) prints 4 as the output.

#### Solution using Let

Using let insures that the 4 instances of `setTimeout` have separate scoped instances of index `i`

[event-loop-var-let.js](_code/event-loop-var-let.js ':include :type=code :fragment=fixLet')

Therefore the output using let provides the expected output:

```shell
0
1
2
3
```

The let keyword from ES6 creates a separate scope for the code block and allows for loop to log i inside of the setTimeout callback before moving on to the next iteration.

## Microtasks

[event-loop-microtasks.js](_code/event-loop-microtasks.js ':include :type=code :fragment=demo')

### User Click

Button is clicked by a user in the UI.

[event-loop-microtasks.js](_code/event-loop-microtasks.js ':include :type=code :fragment=userClick')

### JavaScript Click

Button is clicked by a function such as in an automated test.

[event-loop-microtasks.js](_code/event-loop-microtasks.js ':include :type=code :fragment=javascriptClick')

## Async

[event-loop-async.js](_code/event-loop-async.js ':include :type=code :fragment=demo')
