# dollar-words
Computes "dollar words" from a dictionary file. "Dollar words" are defined as
words whose character values add up to exactly 100, where a = 1, b = 2, etc.

For example, given the word "yarrow":

- y = 25
- a = 1
- r = 18
- r = 18
- o = 15
- w = 23

25 + 1 + 18 + 18 + 15 + 23 = 100, so "yarrow" is a "dollar word."

## Getting Started

```bash
npm ci
npm run list
```

This will install dependencies and print a list of dollar words from the
dictionary file (which is installed as a dependency).
