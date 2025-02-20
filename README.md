# React Native FlatList KeyExtractor Bug

This repository demonstrates a common bug in React Native's FlatList component when dealing with large datasets and an improperly configured `keyExtractor` prop.  The bug manifests as inconsistent rendering, slow scrolling, and unpredictable item display.  The solution shows how to correctly implement `keyExtractor` to fix the issue.

## Bug Description

When the FlatList is provided with a large dataset, and it doesn't have a unique key for each item, it may lead to unexpected behavior. It's crucial to use a unique identifier for each item within the data array.  Without the `keyExtractor`, performance degrades considerably and the display becomes unstable.

## Solution

The solution involves implementing a proper `keyExtractor` function in the FlatList component.  This function should return a unique string identifier for each item.  This allows React Native to efficiently update and render the list even with large datasets.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` or `yarn install`.
3. Run the app using your preferred React Native method (e.g., `npx react-native run-android` or `npx react-native run-ios`).
4. Observe the initial erratic behavior with the buggy version.
5. Then switch to the solution to observe smooth and consistent rendering.