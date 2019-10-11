1. What problem does the context API help solve?
prop drilling

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

reducer: a function that takes a previous state and a action and returns a new state.
action: send payloads of information to the store using dispatch.
store: store holds all of your state in an application.
It is a way of giving state without reshaping or rewriting state.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

aplication state is global where as compoenent state lives within a specific component. application state can be used anywhere on an app without prop drilling. compoenent state keeps data in the component that is is in and passes down to child compoenents. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

thunk is a middleware that lets you call an action as a function instead of an action object. Makes it easier to dispatch actions that follow the lifecycle of a request to an external API.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

application state will probably be my favorite cause it takes away prop drilling.
