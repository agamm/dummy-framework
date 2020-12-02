import {SSR, Static, CSA} from Framework

// User imports
// 	Nice to have: users can define their dir strcutre, 
//  unlike nextjs for example.
import BaseLayout from "./layouts/Layout";
import BlogLayout from "./layouts/BlogLayout";
import Index from "./components/Index";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

const config = {
	frontend: {
		MainSite: {
			layout: BaseLayout,
			type: SSR, 
			components: {
				"/": Index,
				"/login": Login
			}
		},
		"/blog": {
			type: Static(datafolder="./blogData", options={}),
			layout: BlogLayout,
		},
		"/dashboard": {
			type: CSA, // client side application - no need to generate 
						//  on server -> put on CDN and have fun
			component: Dashboard
		}
	},
	backend: {

	}
}

export default config;