# Natorious Utility Collection

This utility collection provides a set of functions for various operations.

## natorious.text

A namespace for text-related operations.

### natorious.text.modify

A collection of text modification utilities.

#### trimString

Truncates a string while considering word boundaries.

**Usage Example:**

```typescript
import { natorious } from 'natorious';

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const truncatedText = natorious.text.modify.trimString(longText, 20);
console.log(truncatedText); // Output: "Lorem ipsum dolor..."
```
