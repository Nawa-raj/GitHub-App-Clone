import 'styles/FooterStyle.scss'

const Footer = () => {
    return (
        <div className='footer_root'>
            <div className="footer_text">
                <p className='heading'>Connecting The World With repositories to simplify the life</p>
                <div className='default_border' />
                <p className='mt-4 text-center'>
                    &copy; {new Date().getFullYear()} <a href='https://github.com' target={"_blank"} rel="noreferrer">GitHub, Inc.</a>
                </p>
            </div>
        </div>
    )
}

export default Footer