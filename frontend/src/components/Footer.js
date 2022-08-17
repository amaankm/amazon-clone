import React from 'react'

const Footer = () => {
    
    const styles = {
        top: {
            background: '#37475A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '50px',
            cursor: 'pointer',
            color: '#f9fcfe',
            fontSize: '14px',
        },
        logo: {
            background: '#232F3E',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '80px',
        }
    }
  
    return (
    <div style={{zIndex: '1', position: 'relative', bottom: '0px'}}>
        <div style={styles.top}
            onClick={() => {document.documentElement.scrollTop = 0}}>
                Back to top</div>
        <div  style={styles.logo} >
            <img style={{width: '100px'}} src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon" />
        </div>
    </div>
  )
}

export default Footer
