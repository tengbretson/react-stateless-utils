# React Stateless Utils

React Stateless Utils is a set of utility functions creating
richer stateless React components using a declarative syntax.

## Examples

```javascript
import { propTypes, defaultProps, displayName } from 'react-stateless-utils';

const MyComponent = displayName('MyComponent')(() => <div>hello world</div>);

const OtherComponent = defaultProps({
  numCats: 0
})(({ numCats }) => <div>
  You have <em>{ numCats }</em> cat(s)
</div>);

const AnotherComponent = propTypes({
  numCats: React.PropTypes.number
})(props => <div>
  You have <em>{ props.numCats }</em> cat(s)
</div>);

```
They can also be used in combination with each other in any order!

```javascript
const BestComponent = propTypes({
  name: React.PropTypes.string,
  age: React.PropTypes.number.isRequired
})(defaultProps({
  name: 'React'
})(({ name, age }) => {
  return <div>
    { name } is { age } years old
  </div>;
}))
```
