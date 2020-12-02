

Let's say we could create a new way to develop websites.  
Not just another Framework for X language.  

The idea started with asking:  
- What if there was a terraform-like (configuration) way to define a web project.  
- What if everything was abstract and decoupled?  
	- Yet had strong linking between frontend and backend


## Features / Pain Points

1. Configurable
	- Configure and define and tie the project in one place.
	- Versionable (git)

2. Be Abstract
	- Interface everything (TypeScript?)
	- Every part of the framework is a module - implying replaceability.
	- Decoupled by default (testable #8).

3. Server/Client Linkage
	- Enforce structure (schema, i/o)
	- Connectivity (routes/apis) - "zero-api"

4. JAMStack Features
	- SSR
	- Serverless native
	- CDN aware

5. Compiler
	- Enforce configuration and schema (contract tests?)
	- Linter
	- In the rust compiler, but for the application-level abstraction.

6. Batteries Included yet Flexible
	- Ability to add pre-defined plugins (auth, payments, analytics)
	- Decide what you want and when.

7. Better Logging/Monitoring/Debugging
	- Structured (easy to parse)
	- Tracing -> context when distributed
	- Ability to debug sessions (graph/live debug) from traced state.

8. Test driven
	- Everything is easily tested by default
	- Advanced testing made easy (fuzzing plugin, performance)

9. Cloud Agnostic
	- By using modules for deployment
	- Not tied to one provider (nextjs-vercel/gatsby-netlify)
	- Secured by default

10. Awesome CLI tool
	- Scaffolding
	- Programmable commands / pluggable.

## Base idea

The configuration defines the backend, deployment and schemas.
Then a frontend app (preferably nextjs/gatsby) can import the config module.
Thus connecting the two and ensuring they are coupled together.

## Nice Extra Features
- Auto documentation
- Pricing estimator plugin
- Live debugging state from error.

## Example
See the idea in [example](https://github.com/agamm/dummy-framework/tree/main/example)