import Framework from "./Framework";
import {
	Database,
	Auth,
	Handlers,
	Deployment,
	Jobs,
	Middleware
	useConfig
} from Framework;

import {
	AWSDeployment,
	PostgresDB
} from Framework.providers; // or some external repo

//User imports
import {
	ViewPostHandler,
	CreatePostHandler
} from handlers

Database({
	provider: PostgresDB, // Could be external, sqlite, mysql, none...
	schema: "./db/prisma.schema"
})

Logs({
	dir: "/var/log/myapp",
	rotate: Logs.rotate(everyMb=5)
})

Auth({
	provider: db, // Basic, Auth0, FirebaseAuth, Netlify, MagicLink...
	roles: [
		Auth.User,
		Auth.Admin
	],
	log: {name: "auth-%s.log"}
})

Handlers({
	posts: {
		view: ViewPostHandler,
		create: Auth.use(CreatePostHandler, role=Auth.User)
	},
	admin: {
		nuke: Auth.use(NukeEverythingHandler, role=Auth.Admin)
	},
	ws: {
        type: Handlers.WebSocket,
        send: sendWSMessage,
    }
})

Jobs({
	aliyahu: {
        cron: "0 3 * * * * ", // or jobs.Every(<int>, at=<time>).Seconds/Minutes-/Years()
        handler: MakeSeatReady
	},
})

Middleware({
	// throttle, verifiedEmail, cache, ba
})

Deployment({
	// Could generate a terraform in the backgound.
	provider: AWSDeployment,
	type: Deployment.Rolling, // Recreate, BlueGreen...
	options: {
		useLambdas: true,
		useEC2: true,
		useRDS: true
		// ...
	}
})

export default useConfig()