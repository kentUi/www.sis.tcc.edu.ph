import { useState } from 'react'

function LayoutFooter() {
    const [count, setCount] = useState(0)

    return (
        <div className="nk-footer">
            <div className="container-fluid">
                <div className="nk-footer-wrap">
                    -
                    <div className="nk-footer-copyright">&copy; 2024 ❤️ All Rights Reserved.</div>
                </div>
            </div>
        </div>
    )
}

export default LayoutFooter;