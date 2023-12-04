import NavBar from "../components/NavBar"

function Login () {

    return (
    <>
    <header>
       <NavBar />
    </header>
    <main>
        <h1>Login</h1>
        <form>
            <div>
                <label for="username">Username:</label>
                <input id="username" type="text" name="username" placeholder="Useername" />
            </div>
            <br/>
            <div>
                <label for="Password">Password:</label>
                <input id="passowrd" type="text" name="password" placeholder="Password" />
            </div>
            <br/>
            <div>
                <button type="submit">submit</button>
            </div>
        </form>
    </main>
    </>
    )
}

export default Login