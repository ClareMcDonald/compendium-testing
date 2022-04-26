# Compendium w/ React Testing Library

## Live Example

[Example](https://adv-react-compendium.netlify.app/)

### Learning Objectives

- What is a test for?
- What is an assertion?
- What should we be testing for?
- Why we don’t test for implementation details
- Behavioral Tests
- Component Tests
- The two users that we test for and the user we avoid
- Difference between getBy and findBy queries
- RTL Big 3: screen, render, expect

### Description

As you gain experience as a developer and build more complex applications, you want to have a way to track if your codebase is running smoothly. It is a real bummer when we have code in our application that is broken, but without tests this easily happen without us realizing. Testing is integral to building confidence in our applications behavior as well as ensuring as we refactor code (and you will definetely refactor) it continues to work.

For this project you will recreate your own compendium of items using an api of your choice. Your UI should also have a way to interact with your list by filtering, sorting, or searching the items in your list.

After your UI is written, write tests that will ensure your compendium is displaying correctly, and your UI interaction is also working properly.

Use the React template to start your project.

### Acceptance Criteria

- Users should be able to see a list of at least 10 items when the page loads
- Users should be able to perform at least one action to manipulate the app state (Filter, Sort, Search, etc..)
- At least 1 test suite for the compendium items display (Component)
- At least 1 test suite for the state manipulation (Behavioral)

### Rubric

| Task                                                                                                   | Points |
| ------------------------------------------------------------------------------------------------------ | ------ |
| 1 Behavioral test suite                                                                                |    5   |
| 1 Component test suite                                                                                 |    5   |
| A List of items are shown on page load                                                                 |    2   |
| Should render a loading state while data loads                                                         |    2   |
| At least one way to manipulate state through UI                                                        |    2   |
| Compendium list is loaded with a useEffect hook                                                        |    2   |
| Deployed on Netlify with passing CI                                                                    |    2   |
