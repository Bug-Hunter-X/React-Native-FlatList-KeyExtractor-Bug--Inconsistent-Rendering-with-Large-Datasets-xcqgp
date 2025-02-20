The solution involves correctly implementing the `keyExtractor` prop in the `FlatList` component. The `keyExtractor` function should take an item from the data array and return a unique string identifier.  Here's how you fix it:

```javascript
<FlatList
  data={data}
  renderItem={({ item }) => <Text>{item.text}</Text>}
  keyExtractor={(item) => item.id} // Correct implementation
/>
```

Ensure that each item in your `data` array has a unique `id` property. If you don't have a unique ID, you can generate one using a library like `uuid`.

Example of adding unique IDs to your data:

```javascript
const dataWithIds = data.map((item, index) => ({
  ...item,
  id: uuid.v4(), // Using uuid library
}));
```