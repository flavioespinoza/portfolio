# Event Loop Ninja

I will be covering `how the event loop` does the following:

- processes complex tasks with timers
- manages animations with timers
- uses event bubbling and delegation
- how it uses custom events

JavaScript is based on a `single threaded execution model`
...in which events wait for their turn to be processed.

**It has 2 main mechanisms**:

1. the event loop
2. the event queue

**Understanding how these 2 mechanisms work...**

- `is key to understanding the lifecycle` of a web app.
- This is especially true
- with respect to
- `the order in which`
- `certain pieces` of the JavaScript code gets executed.

**Never blocking**

- JavaScript, unlike a lot of other languages, **NEVER BLOCKS**.
- Handling I/O is typically performed via events and callbacks, so when the application is waiting for a GET request to return, it can still process other things such as user input.

**Legacy exceptions exist**:

- alert
- synchronous XHR
- however, it is considered a good practice to avoid them.

**This, of course, is a simplification.**

- In order to gain a mastery level understanding
- of how the browser works,
- you need to
- dedicate a significant part of you time, Exploring the nooks and crannies of the event loop.

**Why would `WE` spend our time doing this?**

- It will help us
- as a `team`
- gain a better understanding `of`
- the `inherent performance limitations`
- in `JavaScript` and `the browser`.
- then,
- `we`, as a `team`
- will use this knowledge
- `to develop smoother running applications.`

---

## Timers

A JavaScript feature that `enables us to delay`, or `iterate` the execution of a piece of code `asynchronously`, by a certain amount of time.

**You can use timers to**:

- break up `long running tasks`
- that make applications `slow and unresponsive`
- into `smaller tasks` that `don't BLOCK` the browser.

- This helps develop better performing application.

### setTimeout

[event-loop-web-api.js](_code/event-loop-web-api.js ':include :type=code :fragment=demo')

### setInterval

### clearInterval

---

## Asynchronous

- not **simultaneous or concurrent** in time
- not **synchronous**

Asynchronous code takes statements outside of the main program flow, allowing the code after the asynchronous call to be executed immediately without waiting.

## Synchronous

- `initiating`, or `executing` at precisely the same time
- `recurring` or `operating` at exactly the same time

---

**How events are propagated through the DOM tree?**

 and how to use this knowledge to write simpler and less memory intensive code. Finally, we'll finish the chapter with creating custom events, which can help reduce coupling between different parts of the application. Without further ado, Let's start looping through the event loop section 13.1
02:30
Hey Siri
02:34
hey Siri.
08:25
You will.
10:31
diving into the event loop.
10:33
As you might have figured out the event loop is more complicated than its presentation in chapter two. For starters, instead of a single event queue, which holds only events, the event loop has at least two cues that in addition to events, hold other actions performed by the browser. These actions are called tasks and are grouped into two categories, macro
      Event loop ninja Page 2 of 6 Transcribed by <https://otter.ai>

 tasks, or often just called tasks and micro tasks.
 11:04
Examples of macro tasks include creating the main document object parsing HTML executing main line or global JavaScript code, changing the current URL as well as various events such as page loading input network events and timer events from the browser's perspective, a macro task represents one discrete self contained unit of work. After running a task, the browser can continue with other assignments, such as re rendering the UI of the page, or performing garbage collection micro tasks. On the other hand, are smaller tasks that update the application state, and should be executed before the browser continues with other assignments, such as re rendering the UI. Examples include promise callbacks and Dom mutation changes, micro tasks should be executed as soon as possible in an asynchronous way, but without the cost of executing a whole new macro task, micro tasks, enable us to execute certain actions before the UI is re rendered, thereby avoiding unnecessary UI rendering that might show inconsistent application state.
12:23
Note the EICMA script specification doesn't mention event loops. Instead, the event loop is detailed in the HTML specification at this URL, which also discusses the concept of macro tasks and micro tasks, the ECM a script specification mentions jobs which are analogous to micro tasks in respect to handling promised callbacks at this URL. Even though the event loop is defined in the HTML specification, other environments such as node.js also use it.
12:59
The implementation of an event loop should use at least one cue for macro tasks, and at least one cue for micro tasks event loop implementations usually go beyond that and have several cues for different types of macro and micro tasks. This enables the event loop to prioritize types of tasks. For example, giving priority to performance sensitive tasks, such as user input. On the other hand, because there are many browsers and JavaScript execution environments out in the wild, you shouldn't be surprised if you run into event loops with only a single cue for both types of tasks together, the event loop is based on two fundamental principles.
  Event loop ninja Page 3 of 6 Transcribed by <https://otter.ai>

  13:43
Tasks are handled one at a time, a task runs to completion and can't be interrupted by another task.
13:51
Let's take a look at figure 13.1, which depicts these two principles on a high level figure 13.1 shows that in a single iteration, the event loop first checks the macro task queue. And if there's a macro.
14:14
Flavio,
14:21
describe the event loop.
15:26
JavaScript is single threaded, which means that it can only run one command at a time.
15:33
Another way to say this is that commands must run synchronously, which gives the potential for heavy logic tests to block the main thread.
15:43
We can actually avoid blocking the main thread by using asynchronous JavaScript strategies and methods, such as callbacks and async await.
15:54
If a task is initiated and the event loop is executing other methods on the call stack. The task is placed in a queue or two queues called two different queues.
       Event loop ninja Page 4 of 6 Transcribed by <https://otter.ai>

  16:09
These are Task Queues. One is a micro task queue and what is a macro task queue.
17:24
Understanding the event loop processing complex tasks.
17:30
Understanding the event loop processing complex tasks. Understanding the event loop, processing and complex tasks with timers, managing animations with timers. Using event bubbling and delegation, using custom events. Chapter Two included a short discussion on the JavaScript single threaded execution model,
17:55
and introduced the event loop, and the event queue, in which events wait for their turn to be processed.
18:03
This discussion was particularly useful when presenting the steps in the lifecycle of a webpage, especially when discussing the order in which certain pieces of the JavaScript code get executed. At the same time. It's a simplification. So in order to get a more complete picture of how the browser works. We'll spend a significant part of this chapter exploring the nooks and crannies of the event.
18:29
This will help us better understand some of the performance limitations inherent in JavaScript and the browser, and in turn will use this knowledge to develop smoother running applications.
18:42
During this exploration, we'll put a special focus on the, on timers JavaScript feature that enables us to delay the search, a certain amount of time.
      Event loop ninja Page 5 of 6 Transcribed by <https://otter.ai>

  18:53
I'm sorry.
18:55
During this exploration, we'll put a special focus on timers, a JavaScript feature that enables us to be they a JavaScript feature that enables us to delay a certain amount of time.
19:09
At first glance this might not seem like much, but we will show you how to use timers to break up long running tasks that make applications slow and unresponsive into smaller tasks that don't clog the browser.
19:28
This helps develop better performing applications.
19:34
We will continue this exploration of the events by showing how events are propagated through the DOM tree, and how to use this knowledge to write simpler and less memory intensive code. Finally, we will we will finish this chapter with creating custom events, which can help reduce coupling between different parts of the application.
20:01
Without further ado, Let's start looping through the event loop.
[This note may be incomplete because it was exported before processing was finished.]
     Event loop ninja Page 6 of 6 Transcribed by <https://otter.ai>
