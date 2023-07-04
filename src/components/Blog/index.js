import './blog.css';
import blogImg from "../../img/hero_1.jpg.webp";
import Blogcard from '../Blogcard';


function Products(){
    return(
        <div className='products'>
            <div className='container'>
                <div className='justify-center flex-column text-center productContent mb-30'>
                    <h2 className='productHeading'>Our Blog</h2>
                    <p className='productPara'>See Our Daily News & Updates</p>
                </div>
                <div className='row'>
                    <Blogcard blogImg={blogImg} tittle="Many People Selling Online" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius." />
                    <Blogcard blogImg={blogImg} tittle="Many People Selling Online" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius." />
                    <Blogcard blogImg={blogImg} tittle="Many People Selling Online" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius." />
                </div>
            </div>
        </div>
    );
}

export default Products;