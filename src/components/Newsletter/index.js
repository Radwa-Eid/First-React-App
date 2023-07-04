import './newsletter.css';

function Newsletter(){
    return(
        <div className='newsletter'>
            <div className='container'>
                <div className='row'>
                    <div className='newsText'>
                        <h2>Newsletter</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='newsText'>
                        <form className='newsForm'>
                            <input className='email' name='email' type='email' placeholder='Email'></input>
                            <button className='emailBtn'>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;