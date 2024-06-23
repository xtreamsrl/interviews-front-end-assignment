import MenuItem from './MenuItem'
import './navbar.css'

export default function NavBar() {

    return (
        <>
            <div className="navBar">
                <div className="leftElems">
                    <div className="logo">
                        <button className='logoButton'>
                            <p>RecipeBook</p>
                            <img src='./book.svg' alt='bookImage' className='logoImg' />
                        </button>
                    </div>
                    <div className="navigationMenu">
                        <MenuItem label={"Cuisines"} />
                        <MenuItem label={"Dietary"} />
                    </div>
                </div>
                <div className="rightElems">
                    <button>Add</button>
                    <button className='redButton'>Filter</button>
                </div>
            </div>
        </>
    )
}