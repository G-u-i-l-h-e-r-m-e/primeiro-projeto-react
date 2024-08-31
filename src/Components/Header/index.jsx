
const Header = ({title,subtitulo}) =>{

    const headerStyle = {
        background: '#f5b642',
        padding: '20px',
        textAlign: 'center',
        borderBottom: '2px solid #696969'
    }

    const titleStyle = {
        margin: 0,
        fontSize: '24px',
        color: '#fff'
    }
    // console.log(props.title);

    return(

        <header style={headerStyle}>
            <h1 style={titleStyle}>{title}</h1>
            <h2>{subtitulo}</h2>
        </header>
        
    );
}

export default Header;

