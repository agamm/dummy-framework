
interface Request {
	schema: string,
	headers: Header[],
	params: Param[]
}
// =====



export default ViewPostHandler = (req: Request, res: Response) => {
	return res.json({hello: "world!"}).Ok()
	// res.Err(<Error interface>)
}