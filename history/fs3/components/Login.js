import LoginHandler from "../handlers/Login";



const LoginComponent = (loginHandler) => {

	const handleLogin = (e) => {
		let res = await loginHandler(e.data)
		res = await res.json()
		console.log(res.isLoggedIn) 
	}

	return (
		<ClientLogin onSubmit={handleLogin}></ClientLogin>
	)
}

export default LoginComponent;