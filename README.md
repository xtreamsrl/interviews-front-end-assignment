<!---
Hi! We're happy you opened this file, not everyone does!
To let us know you did, paste a capybara picture
in the How to Run section 😊
These will be extra points for you!
-->

# React Developer Interview Assignment

## Introduction

This is an interview exercise for the Digital Products team of [xtream](https://www.linkedin.com/company/xtream-srl). In
the following sections, you will find a number of challenges that we ask you to implement. You **DO NOT NECESSARILY need
to complete 100% of them**: you can choose to complete as many as you want.

:watch: We give you **1 week** to submit a solution, so that you can do it at your own pace. We are aware that you might
have other commitments, so we are not expecting you to work on this full-time. You will be evaluated based on the
quality of your work, not on the time you spent on it.

### Deliverables

Simply fork this repository and work on it as if you were working on a real-world project assigned to you. A week from
now, we will assess your work.

:heavy_exclamation_mark: **Important**: At the end of this README, you will find a "How to run" section that is not
written out. Please, write there instructions on how to run your code: we will use this section to evaluate your work.

### Evaluation

Your work will be assessed according to several criteria. As an example, these include:

- Code quality
- Design Patterns
- Project Structure
- Work quality (commits, branches, workflow, tests, ...)
- Provided Documentation

#### A Friendly Reminder:

We’re all about embracing the latest in AI, including GPT and similar technologies. They’re great tools that can provide
a helping hand, whether it’s for generating ideas, debugging, or refining solutions. However, for this coding challenge,
we’re really keen to see your personal touch. We're interested in your thought process, decision-making, and the
solutions you come up with.

Remember, while using AI tools can be incredibly helpful, the essence of this task is to showcase your skills and
creativity. Plus, be prepared to dive into the details of your code during the technical interview. Understanding the '
why' and 'how' behind your decisions is crucial, as it reflects your ability to critically engage with the technology
you're using.

So, feel free to lean on AI for support, but ensure your work remains distinctly yours. We're looking for a blend of
technical savvy and individual flair. Dive in, get creative, and let’s see what you can create. Excited to see your
work. Happy coding! 🚀💼👩‍💻

### Let's get started

We do understand that some topics might be unfamiliar for you. Therefore, pick any number of challenges and try to
complete them.

:heavy_exclamation_mark:**Important**: you might feel like the tasks are somehow too broad, or the requirements are not
fully elicited. **This is done on purpose**: we want to give you the freedom to make your own choices and to put as
fewer constraints as possible on your work. We appreciate if you could record any decisions, assumptions and doubts,
together with any questions that you will ask in a real-world scenario. If you want to choose our stack instead, we
generally work with TypeScript and React.

---

### Problem Domain

Your task is to build a web application for RecipeBook, a community-driven recipe sharing platform. Users can browse
recipes, add new recipes, and leave comments and ratings. The application should allow users to search for recipes by
ingredients or cuisine and filter results based on dietary preferences. Do no consider authentication and authorization.

If you need some inspiration, you can take a look at [UI example folder](./ui-examples), where you can find some
generated screenshots of the application. Consider them as a starting point of a more complex application with respect
to the one that you have to build, but feel free to design your own UI.

Inside the [server](./server) directory there is a simple server that you can use to fetch the data. We suggest you to
read the instruction to setup it in the [server README](./server/README.md), you should find all the api endpoints that
you need to complete the challenges.

#### Challenge #1: Recipe List

Create the first RecipeBook page: the recipe list! Each recipe have a name, a photo, a list of ingredients
and many more details that you can find in the data model. Consider to avoid to show all the recipes at once to reduce
the browser load.

#### Challenge #2: Search and Filter

Add a search bar and a list of filters based on cuisine, difficulty and dietary preferences (e.g., vegetarian, gluten-free).

### Challenge #3: Add a Recipe

Design a form that allows users to add new recipes by providing details such as the recipe name, ingredients,
instructions, cuisine type, and dietary preference and an image.

### Challenge #4: Recipe Details and Comments

Develop a recipe details page where users can view the full recipe, including ingredients, instructions, and user
comments. Enable users to add comments and rate the recipe, displaying the average rating and updating the list of
comments.

## How to run

Install both server and ui dependencies:

```
npm run install:all
```

Start both server and ui:

```
npm run start:all
```

![Here's your capibara](./capibara.jpeg)

## Solution

### Assumptions and decisions

1. The project was started as an SPA for brevity reasons. In a real world scenario it would be necessary to ask if indexing and first load time are important to the target audience. For the sake of the project we assume they aren't.
2. Some entity as the difficulty are treated as an actual entity, while in a real world scenario they would probably be implemented as a enum, making the API call to fetch them superfluous.
3. React query is used to manage data fetching, but for the sake of simplicity the components don't visibly handle the loading and error states.
4. While calling the API to fetch the recipe list the `expand` property is hardcoded to simulate what would be done with a GraphQL api
5. In filtering the search component hasn't been debounced for the sake of simplicity
6. The file upload component is not generic, also for the sake of simplicity
7. The `/recipes` post endpoint on the server was edited, as the JSON schema said the `ingredients` property was an array of string, while the actual code treated it as a string to then split on the server. The endpoint has been changed to make it conform to the API spec.

### Project Architecture

The React application is structured as follows:

```
- src
  - components
  - config
  - utils
  - features
    - entity
      - components
      - hooks
      - api
      - types
```

The folder `src/components` contains all the components that are used globally in the application, while each entity has its own folder with its own components to share between pages (list/edit/create).
