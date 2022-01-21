---
title: PostgreSQL 
---


## Overview

PostgreSQL is... 

## Integration Use Cases
Use cases...

## Integration Options
OpenFn adaptors (see language-postgres)[ADDLINK!!] provide direct database connections for accessing data and executing SQL and standard database operations. 


### Authentication: 
To create the direct DB connection, you'll need to specify the following credential inputs. 
```js
{
  "configuration": {
      ....
    }
}
```
(This authentication step is handled in the OpenFn adaptor.)

### Sample Job Expressions: 
Some examples job snippets that write SQL and execute database operations. 


See the [Job Library](/library) for more sample jobs.


### Integration tips

- Tips re: external ids, constraints, etc. 


## Common Errors
Other errors you've seen...
`Connection TIMEOUT`


## OpenFn Adaptors

OpenFn implementations can leverage the [`PostgreSQL`](https://github.com/OpenFn/language-postgresql) adaptor. 


## Implementation Examples

1. Wildlife Conservation Society Kobo < > Database: https://github.com/OpenFn/consosci