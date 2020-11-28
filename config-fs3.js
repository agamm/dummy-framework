import {ServerRendered, ServerAPI, ServerlessAPI} from Framework

// User imports
import {
	LoginHandler, 
	UsersHandler, 
	LogHandler
} from "./handlers"

import { LoginComponent } from "./components"


const config = {
	routes: {
		"/": { 
			type: Static, 
			handler: StaticRoute("/public") 
		},
		"/blog/{blogPost}": { 
			type: SSR, 
			handler: BlogHandler 
		},
		"/login": {
			type: SSR,
			component: LoginComponent.hook(this.apis.auth.login), // React -> SSR
		}
	},
	apis: {
		auth: {
			login: LoginHandler
		}
	}
}   

export default config;