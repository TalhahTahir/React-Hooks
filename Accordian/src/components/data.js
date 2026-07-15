const data = [
  {
    id: 1,
    question: "What is the difference between State and Props in React?",
    answer: "State represents the internal, mutable data managed directly within a component. Props (short for properties) are immutable data passed down from a parent component to a child component to configure it."
  },
  {
    id: 2,
    question: "What is the purpose of the dependency array in the useEffect hook?",
    answer: "The dependency array tells React when to re-run the effect side-effect. If empty, the effect runs only once after the initial mount. If it contains variables, the effect re-runs whenever any of those specified variables change."
  },
  {
    id: 3,
    question: "Why do we use the useState hook instead of a regular local variable?",
    answer: "Regular variables do not trigger a component re-render when their values change. The useState hook provides a state variable and a setter function, which forces React to update the UI whenever the state is modified."
  },
  {
    id: 4,
    question: "How do you pass data from a child component back to a parent component?",
    answer: "You pass a callback function as a prop from the parent component to the child component. The child component can then call this function and pass data back up to the parent as arguments."
  },
  {
    id: 5,
    question: "What are the rules of using React Hooks?",
    answer: "You must only call Hooks at the top level of your component function—never inside loops, conditions, or nested functions. Additionally, you must only call Hooks from React function components or custom Hooks."
  }
];

export default data;
