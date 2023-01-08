import './LayoutPage.css';

function LayoutPage(props) {
    return (
            <div className='layout-page-container'>
                {props.children}
            </div>
    )
}

export default LayoutPage;