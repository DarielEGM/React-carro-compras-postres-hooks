const styles={
    bubbleAlert:{
        backgroundColor: '#E9725A',
        borderRadius: '15px',
        color: '#fff',
        padding: '2px 10px',
        fontSize: '0.9rem',
        width:'20px'
    }
}

const conseguirNumero = (num) => {
    if(!num){return ''}
    return num > 9 ? '+9' : num
}

const BubbleAlert = (value) =>{
    return(
        <span style={styles.bubbleAlert}>
             {conseguirNumero(value.value)} 
        </span>
    )
}

export default BubbleAlert 