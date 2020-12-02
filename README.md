

Compose, bind and ensure your web architecture.

- Define your architecture in one place. 
- Eliminate many classes of bugs at before deploying.
- Be cloud agnostic, yet cloud-first.

tags: configuration, reliable
--- 

Let's say we could create a new way to develop websites.  
Not just another Framework for the X language.  

The idea started with asking:  
- What if there was a terraform-like (configuration) way to define a web project.  
- What if everything was abstract and decoupled?  
	- Yet had strong linking between frontend and backend
	- What if we could reduce bugs like wrong requests/responses between the client and server?


## Features 

1. Configurable
	- Configure and define and tie the project in one place.
	- Versionable (git)

2. Be Abstract
	- Interface everything (TypeScript?)
	- Every part of the framework is a module - replace internals with what works for you.
	- Decoupled by default (testable #8).

3. Server/Client Linkage
	- Enforce structure (schema, i/o)
	- Connectivity (routes/apis) - "zero-api"

4. JAMStack Features
	- SSR
	- Serverless native
	- CDN aware

5. Compiler
	- Enforce repo-wide configuration and schema (contract tests?)
	- Linter
	- In the rust compiler, but for the application-level abstraction.
	- Output deployable apps - no magic.

6. Batteries Included yet Flexible
	- Ability to add pre-defined plugins (auth, payments, analytics)
	- Flexible or opinionated, you decide.

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
	- Self updating
	- Bug reporting directly with github and checks for known issues.

## Base idea

The configuration defines the backend, deployment and schemas.
Then a frontend app (preferably nextjs/gatsby) can import the config module.
Thus connecting the two and ensuring they are coupled together correctly.

## Nice Extra Features
- Auto documentation
- Pricing estimator plugin
- Live debugging state from error.
- Plot the architecture graphically.

## Back of mind ideas:
- Use graphs to reprecent components in the architecture. 
	- Allows to see connected components (check for required tests).
- Outsource deployment to terraform
- Architecture wide changes from one source - the config.

## Example
See the idea in [example](https://github.com/agamm/dummy-framework/tree/main/example)