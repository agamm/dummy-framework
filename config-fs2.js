import {ServerRendered, ServerAPI, ServerlessAPI} from Framework

// User imports
import {
	LoginHandler, 
	UsersHandler, 
	LogHandler
} from "./handlers"

import { MainSiteComponent } from "./components"


const config = {
	routes: [
		Static("/blog", {
			source: "./blogData"
			// interpreter: NextJS (N2H)
		}),

		ServerAPI("/login", {
			handler: LoginHandler,
		}),
		ServerAPI("/users", {
			handler: UsersHandler.getUsers,
		}),

		ServerlessAPI("/log", {
			handler: LogHandler,
		}, method="PUT"),

		ServerRendered("/", { // SSR - SEO
			component: MainSiteComponent,
		})
	]
}


export default config;