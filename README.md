# Example for using useSWR
### This project uses [useSWR](https://swr.vercel.app/) to efficiently fetch, cache, and revalidate data from an API. useSWR is a React hook for data fetching, providing a powerful and declarative way to handle data states such as loading, errors, and caching.

&nbsp;
&nbsp;

## Install SWR
```
npm install swr
```

## KEYWORD!!!
### Auto Revalidation 
If the resource is immutable, that will never change if we revalidate again, we can disable all kinds of automatic revalidations for it.
