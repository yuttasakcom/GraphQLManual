# GraphQL Manual

## Why does GraphQL exist?

## What is GraphQL?

## How do we use GraphQL?

## Query Fragments

```
{
  apple: company(id: "1"){
    ...companyDetails
  }
  google: company(id: "2"){
    ...companyDetails
  }
}

fragment companyDetails on Company {
  id
  name
  description
}
```

## Mutations

```
mutation {
  addUser(firstName: "Yo", age: 35) {
    id
    firstName
    age
  }
}
```

```
mutation {
  deleteUser(id: "23") {
    id
  }
}
```

```
mutation {
  editUser(id: "24", age: 10, firstName: "Yo") {
    id
    firstName
    age
  }
}
```
