/* 1. In the context of hooks, why is it important to call them at the top level of a component?
asw-To maintain the correct ordering of hooks between renders

2.
React components go through a series of lifecycle stages as they are rendered and updated. These stages include initialization, mounting, updating, and unmounting, each with its own set of methods and hooks that are called in a specific order.

Evaluate local variables and initialize hooks
Set DOM refs
Insert DOM nodes
DOM paint
useLayoutEffect setups
useEffect setups

asw-to
Evaluate local variables and initialize hooks
Insert DOM nodes
Set DOM refs
useLayoutEffect setups
DOM paint
useEffect setups

3. What does the useContext hook do?

asw-to
Manages state across multiple components
✅Allows a functional component to subscribe to React context
Connects a React component to a Redux store
Replaces the need for prop drilling

4. Which of these is an incorrect statement about React’s reconciliation process?

 It compares the current DOM with the virtual DOM
 ✅It always re-renders the entire component tree
It updates the DOM with the minimal number of changes
It utilizes the key prop to identify elements in a list

5. What happens when a component is rerendered?

✅All of it's child component are also rerendered
Only the childs component whose props are changed are rerendered
Child components are not rerendered
Peer components are also rerendered

6. What is a side effect in React?
A change in component state
An operation that affects other components
✅Any operation that affects something outside the scope of the function being executed
A bug that occurs during rendering

7. Why should you not initialize state in React using props directly?

It is considered a bad practice but has no real impact
It can cause the component to re-render indefinitely
It makes the component stateful
✅It can lead to bugs due to the inconsistency between props and state

8. What is the purpose of the key prop in a list of React elements?

To improve performance during updates
To enable reverse data flow
To uniquely identify each element
✅Both a and c

9. How does React handle the setState function call?
Synchronously updates the state and the state variable
✅Asynchronously updates the state
Replaces the old state with the new state
Directly mutates the current state

10. What is the use of useRef in React?
To persist values across renders without triggering a re-render
To reference a DOM element directly
To store the previous state value
✅Both a and b

11. In which scenario would you use React.memo?

When you want to memoize a function component
✅To prevent unnecessary renders when props do not change
When managing the state in a class component
To use context in a functional component

12. What does useReducer help with?
✅Managing complex state logic in React components
Reducing the size of the component
Direct manipulation of the DOM
Enhancing performance by reducing the number of renders
*/
