const styles={
    layout:{
        backgroundColor:'#fff',
        color:'#0A283E',
        alignItems:'center',
        display: 'flex',
        flexDirection: 'column'
    },
    conteiner:{
        width: '1200px'
    }
}

const Layout =(props) =>{
    return(
        <div style={styles.layout}>
            <div style={styles.conteiner}>
                {props.children}
            </div>
        </div>
    )
}

export default Layout