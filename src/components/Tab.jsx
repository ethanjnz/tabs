import { useState } from "react"


const Tab = (props) => {

    const {items} = props
    const [content, setContent] = useState(items[0].content)

    const clickTab = (value) => {
        setContent(value.content)
    }

    return (
        <div className="container border shadow m-5 mx-auto w-25">
            <div className="header d-flex">
               { items.map((items, index) => {
                return <div key={index}>
                            <button className="btn btn-primary m-2" onClick={(e) => clickTab(items)}>{items.tab}</button>
                        </div>
               })}
            </div>
            <div className="border m-2 rounded">
                {content}
            </div>
        </div>
    )
}

export default Tab