const styles={
    button:{
        backgroundColor: '#0A283E',
        color:'#fff',
        padding: '15px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    }
}

const Button = ({children, onClick}) =>{
    return(
        <button style={styles.button} onClick={onClick}>
            {children}
        </button>
    )
}


export default Button