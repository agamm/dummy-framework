

// This is run server side
const LoginHandler = (req, res) => {
	let user = req.get("user")
	let pass = req.get("pass")

	return db.login(user, pass)
}

export default LoginHandler;