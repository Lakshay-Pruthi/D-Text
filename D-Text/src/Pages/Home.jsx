import Form from "../Components/Form";
import logo from '../assets/Logo.webp'


function Home() {
    return (
        <>
            <div className="container">
                <div id="left">
                    <img src={logo} alt="" />
                    <h1>D-TEXT</h1>
                    <p>- Decentralized chat platform</p>
                    <h2>Welcome</h2>
                </div>
                <Form />

            </div>
        </>
    )
}

export default Home;