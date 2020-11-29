

// auth({
// 	provider: Auth0
// })

auth({
	provider: DB,
	schema: "db/schema.prisma"
})

backend({
	posts: {
		view: viewPost,
		create: auth.login(createPost),
		delete: auth.login(deletePost),
	},
	admin: {
		deleteAll: auth.login(deleteAll, role="admin")
	}
})

frontend({
	"/post/:id": {
		component: ViewPost,
	}
})

frontend({
	"/blog/:id": {
		component: ViewBlog,
		type: Static,
		data: path("./blog")
	}
})

build({
	images: [webp]
})

deploy({
	provider: AWS
})

=====
import backend from Framework
const ViewPost = (id) => {
	viewData = await backend.posts.view(id)
}