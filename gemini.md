# Project Context for Gemini CLI

## Project Overview

This project is a **React Native Expo application** for an **AI-powered course discovery and learning app**.

The core idea is to allow users to search for a topic they want to learn, and the app will intelligently process that query and return concise learning-oriented results.

## High-Level Functionality

1. **Search Interface**

   * The app contains a search box where users enter a learning topic (e.g., "Neural Networks", "React Native basics").

2. **Backend Processing Flow**

   * When a search query is submitted:

     1. The backend first **summarizes and refines the user query** using AI.
     2. Based on the summarized topic, the backend then **fetches and ranks popular YouTube videos** relevant to that topic.

3. **Results Display**

   * The frontend displays:

     * A short AI-generated summary of the topic
     * A list of relevant and popular YouTube videos (title, thumbnail, channel, etc.)

## Tech Stack

### Frontend

* React Native
* Expo
* JavaScript / TypeScript
* Mobile-first UI

### Backend (Conceptual)

* AI-based query summarization
* YouTube data retrieval (search + popularity-based ranking)
* API-based communication with the mobile app

## Project Goals

* Provide **quick learning guidance** instead of overwhelming users with raw search results
* Make it easy for users to start learning any AI or tech topic
* Focus on **clarity, relevance, and speed**

## Development Guidelines for Gemini CLI

* Use this document as **context for understanding the project**
* Focus on:

  * Code suggestions
  * Architecture improvements
  * Refactoring
  * Logic enhancements
* **Do NOT run the project** for testing or validation after making changes

  * The developer will run and test the project manually
* **Do NOT commit, push, or modify Git history**

  * Do not create commits
  * Do not push changes to any remote repository
  * All changes are for local review only

## Important Notes

* Assume the project is under active development
* Do not introduce breaking changes without explanation
* Prefer clean, readable, and maintainable code
* Keep suggestions aligned with React Native + Expo best practices

---

This file exists solely to provide **project context** to Gemini CLI and should not be treated as executable documentation.
