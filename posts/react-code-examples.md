---
title: "Practical code examples from ReactJS docs"
date: "2022-10-21"
---

![Basic react component](https://raw.githubusercontent.com/Dimterion/Nextjs-blog/main/public/images/react-code-examples/basic_react_component.png "Basic react component")

Upon reading through the [new ReactJS documentation](https://medium.com/@dimterion/re-learning-react-through-the-documentation-2c7a4fc2729d) I’ve found some nice code examples that, with some tweaking, can be used straight away. So, I decided to talk about a few of them.

> The provided links will lead to the section of the docs with the final code example (there’s a sandbox with it + you can click on the fork link in its upper right corner to view the full code in [CodeSandbox](https://codesandbox.io/)). In the description I will also add a link to my own project to show how I used it myself. Its repo can be found [here](https://github.com/Dimterion/Portfolio-site) (I also wrote about it in [one of the previous stories](https://medium.com/@dimterion/building-a-portfolio-site-using-react-20bc0be197c5)).

1.[Filterable table](https://beta.reactjs.org/learn/thinking-in-react#step-5-add-inverse-data-flow) (code sandbox at the end of the page)

It’s one of the first examples in the docs to show overall React functionality (Thinking in React section). It can be used to make a simple table with a search field, sections and basic sorting. The raw example can be seen in the docs and, upon some adjustments, I’ve turned it into [this](https://portfolio-site-dimterion.vercel.app/projects) table for my small app.

![Filterable table from React docs](https://raw.githubusercontent.com/Dimterion/Nextjs-blog/main/public/images/react-code-examples/filterable_table_docs.png "Filterable table from React docs")

> _Docs example_

![Filterable table from my app](https://raw.githubusercontent.com/Dimterion/Nextjs-blog/main/public/images/react-code-examples/filterable_table_my_app.png "Filterable table from my app")

> _An example with my own adjustments_

2.[Gallery](https://beta.reactjs.org/learn/state-a-components-memory#recap) (first challenge at the end of the page)

You can simply check the solution for the challenge there if you don’t want to complete it. With that code you can make a simple gallery with Next/Previous buttons, counter and “Show details” button/section. I’ve made some changes to use it for the “Studies” page in [my version](https://portfolio-site-dimterion.vercel.app/studies).

![Gallery from React docs](https://raw.githubusercontent.com/Dimterion/Nextjs-blog/main/public/images/react-code-examples/gallery_docs.png "Gallery from React docs")

> _Docs example_

![Gallery from my app](https://raw.githubusercontent.com/Dimterion/Nextjs-blog/main/public/images/react-code-examples/gallery_my_app.png "Gallery from my app")

> _An example with my own adjustments_

3.[ToDo list](https://beta.reactjs.org/learn/updating-arrays-in-state#recap) (third or fourth challenge at the end of the page)

Again, if you don’t want to complete the challenge, simply check its solution. The last two challenges show the same result but use different approach on how to implement it. This is a basic ToDo app with the functionality to add tasks to the list, delete and edit them. In [my version](https://portfolio-site-dimterion.vercel.app/tasks) I’ve added some styling, tasks counter and checks to allow adding/editing them only when something is written in the form (otherwise, there’s a message being displayed). There is also a dropdown menu to choose a version of the app (the first one is made with State only, the second one — with Reducer and the third one combines Reducer and Context; links to the appropriate docs can be found in each section of my version).

![ToDo from React docs](https://raw.githubusercontent.com/Dimterion/Nextjs-blog/main/public/images/react-code-examples/todo_docs.png "ToDo from React docs")

> _Docs example_

![ToDo from my app](https://raw.githubusercontent.com/Dimterion/Nextjs-blog/main/public/images/react-code-examples/todo_my_app.png "ToDo from my app")

> _An example with my own adjustments_

4.[Quiz](https://beta.reactjs.org/learn/managing-state#reacting-to-input-with-state)

It’s a simple quiz component to submit an answer and get the result depending on whether it’s right or not. In [my version](https://portfolio-site-dimterion.vercel.app/) (Quiz button below the image on the main page) I’ve added a bit of styling and an image that is being shown if you reply correctly.

![Quiz from React docs](https://raw.githubusercontent.com/Dimterion/Nextjs-blog/main/public/images/react-code-examples/quiz_docs.png "Quiz from React docs")

> _Docs example_

![Quiz from my app](https://raw.githubusercontent.com/Dimterion/Nextjs-blog/main/public/images/react-code-examples/quiz_my_app.png "Quiz from my app")

> _An example with my own adjustments_

5.[Form editor](https://beta.reactjs.org/learn/reacting-to-input-with-state#recap) (second challenge at the end of the page; fourth challenge is a version without the usage of React)

It’s a form with the functionality to edit it. I’ve slightly modified it to place the text over the image from the gallery in [my version](https://portfolio-site-dimterion.vercel.app/projects) (Misc. section at the bottom of the page — first button). The text can be edited or cleared from the image.

![Form editor from React docs](https://raw.githubusercontent.com/Dimterion/Nextjs-blog/main/public/images/react-code-examples/form_editor_docs.png "Form editor from React docs")

> _Docs example_

![Form editor from my app](https://raw.githubusercontent.com/Dimterion/Nextjs-blog/main/public/images/react-code-examples/form_editor_my_app.png "Form editor from my app")

> _An example with my own adjustments_

As it can be seen from these examples, I was reading through the documentation and implementing some of the code to my personal project, adjusting various parts of it. I didn’t mention all of the things I’ve used (maybe I’ll talk about it in another story) as there are more.

What I wanted to show is that you can take some bits of code from the docs directly and use them in your own apps/sites. It also helps learning React as you basically do some practice on the go and not just read through the text. So far I prefer this approach as it makes you not only follow the tutorial but try implementing or modifying the provided code examples.

That’s it for this Friday’s story of mine. If you’ve got some use out of it, I thank thee, kind person.
