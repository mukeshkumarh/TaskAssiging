import React ,{useState} from 'react'

export default function Form() {
    const initialise = {
        email: "",
        password: "", 
      };
      const [Data, setData] = useState(initialise);
      const handleinput = (e) => {
        const name = e.target.name; 
        const value = e.target.value;
        setData({ ...Data, [name]: value });
         };
      const handlesubmit = (e) => {
        e.preventDefault(); 
        console.log(Data); 
         };
      const { email, password } = Data;
  return (
    <>
         <div className="outer-box">
        <div className="inner-box">
          <header className="singnup-header">
            <h2 className='swift'>SWIFT</h2>
          </header>
          <main>
            <form className="signup-body" onSubmit={handlesubmit}>
              <p>
                <input
                  type="text"
                  placeholder="email id"
                  value={email}
                  name="email"
                  onChange={handleinput}
                />
              </p>
              <p>
                <input
                  type="password"
                  placeholder="password"
                  value={password} 
                  name="password" 
                  onChange={handleinput}
                />
              </p>
              <footer className="login-footeeer">
                <button className="Button" type="submit">
                  Login
                </button>
              </footer>
            </form>
          </main>
        </div>
      </div>
    </>
  )
}
