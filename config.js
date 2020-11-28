import {SSR, Static, NextJS} from Framework

// This comes to solve micro front-ends
const config = {
	routes: {
		"/": {

		},
		"/oldblog": Static("./oldblog"), // this is the default static generator, if you don't want to use NextJS or Gatsby / Hugo...
		"/blog": NextJS(repo="https://github.com/vercel/next.js/tree/canary/examples/blog-starter"),
		"/dashboard": React(repo="..."),
		"/admin": Vue3(repo="...")
	} 
}

export default config;